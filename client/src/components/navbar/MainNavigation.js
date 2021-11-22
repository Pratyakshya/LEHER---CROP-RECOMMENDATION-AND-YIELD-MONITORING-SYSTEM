// import { Link } from "react-router-dom";

import "./MainNavigation.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TranslateIcon from "@mui/icons-material/Translate";
import SettingsIcon from "@mui/icons-material/Settings";

function MainNavigation() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className="logo" src="./images/leher_logo.png" alt="LEHER" />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <TranslateIcon />
          </div>
          <div className="topbarIconContainer">
            <SettingsIcon />
          </div>
          <div>
            <img
              src="./images/farmer_logo.png"
              alt="profilepicture"
              className="topbarAvatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
