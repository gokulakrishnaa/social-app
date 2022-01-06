import React from "react";
import "./Home.css";
import { Topbar } from "../../components/topbar/Topbar.js";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Feed } from "../../components/feed/Feed";
import { Rightbar } from "../../components/rightbar/Rightbar";

export function Home() {
  return (
    <div className="home">
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </div>
  );
}
