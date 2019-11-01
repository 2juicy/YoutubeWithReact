import React from "react";
import { Menu } from "semantic-ui-react";
import { SidebarItem } from "./SidebarItem/SidebarItem";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <Menu borderless vertical stackable fixed="left" className="side-nav">
      <SidebarItem highlight={true} label="Home" icon="home" />
      <SidebarItem label="Trending" icon="fire" />
      <SidebarItem label="Followers" icon="spy" />
      <SidebarItem label="History" icon="history" />
      <SidebarItem label="Watch later" icon="clock" />
      <SidebarItem label="Liked videos" icon="thumbs up" />
    </Menu>
  );
}
