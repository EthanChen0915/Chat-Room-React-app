import React, { useEffect, useState } from "react";
import "./Sidebar.css";

import SidebarChannel from "./SidebarChannel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import CallIcon from "@mui/icons-material/Call";
import MicIcon from "@mui/icons-material/Mic";
import { Avatar } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import db, { auth } from "./firebase";

const Sidebar = () => {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    );
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("enter a channel name");
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };
  console.log(channels);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>React Chat Room</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>text Channels</h4>
          </div>
          <button onClick={handleAddChannel} className="sidebar__addChannel">
            +
          </button>
        </div>
        <div className="sidebar__channelsList">
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceinfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__VoiceIcons">
          <WorkspacesIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar onClick={() => auth.signOut()} src={user.photo} />
        <div className="sidebar__profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 6)}</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadphonesIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
