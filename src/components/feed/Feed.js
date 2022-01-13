import "./Feed.css";
import { useState, useEffect, useContext } from "react";
import { Share } from "../share/Share.js";
import { Post } from "../post/Post.js";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext.js";

export function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            "https://node-rtsocial.herokuapp.com/api/posts/profile/" + username
          )
        : await axios.get(
            "https://node-rtsocial.herokuapp.com/api/posts/timeline/" + user._id
          );
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
