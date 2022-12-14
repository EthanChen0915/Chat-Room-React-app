import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import HelpIcon from "@mui/icons-material/Help";
import "./chatHeaderComponent.css";

const ChatHeaderComponent = ({ channelName }) => {
  return (
    <div className="chatheader">
      <div className="chatheader__left">
        <h3>
          <span className="chatheader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatheader__right">
        <NotificationsIcon />
        <EditLocationIcon />
        <PeopleAltIcon />

        <div className="chatheader__search">
          <input type="text" placeholder="search" />
          <SearchIcon />
        </div>
        <SendIcon />
        <HelpIcon />
      </div>
    </div>
  );
};

export default ChatHeaderComponent;
