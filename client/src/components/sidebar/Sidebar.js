import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        {/* <h3 className="sidebarTitle">Dashboard</h3> */}
        <ul className="sidebarList">
          <Link to="/" className="sidebarlistText">
            <li className="sidebarListItem">
              <HomeIcon className="sidebarIcon" />
              Home
            </li>
          </Link>
          <Link to="/cropProfile" className="sidebarlistText">
            <li className="sidebarListItem">
              <LocalFloristIcon className="sidebarIcon" />
              Crop Profile
            </li>
          </Link>
          <Link to="/feedback" className="sidebarlistText">
            <li className="sidebarListItem">
              <ChatIcon className="sidebarIcon" />
              Messages
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
