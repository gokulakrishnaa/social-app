import React from "react";
import "./Topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">React Social</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Search for friends, posts..."
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Badge badgeContent={4} color="secondary">
              <PersonIcon />
            </Badge>
          </div>
          <div className="topbarIconItem">
            <Link to="/messenger" style={{ textDecoration: "none" }}>
              <Badge badgeContent={4} color="secondary">
                <ChatIcon />
              </Badge>
            </Link>
          </div>
          <div className="topbarIconItem">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            className="topbarImg"
            src={
              user.profilePicture ? user.profilePicture : PF + "noavatar.jpg"
            }
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
