import React from "react";
import "./TopBar.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="topbarwrapper">
        <div className="topLeft">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topRight">
          <div className="tb-iconcontainer">
            <NotificationsActiveIcon />
            <span className="topIconBadge">3</span>
          </div>
          <div className="tb-iconcontainer">
            <PublicIcon />
            <span className="topIconBadge">en</span>
          </div>
          <div className="tb-iconcontainer">
            <SettingsIcon />
          </div>
          <img
            src="./images/avatar.jpg"
            alt="Saman-Mousavi"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
