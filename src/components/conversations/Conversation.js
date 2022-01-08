import "./Conversation.css";
import { useState, useEffect } from "react";
import axios from "axios";

export function Conversation({ conversation, currentUser }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/users?userId=" + friendId
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={user.profilePicture ? user.profilePicture : PF + "noavatar.jpg"}
        alt=""
      />
      <span className="conversationText">{user.username}</span>
    </div>
  );
}
