import React from "react";
import { Menu, Divider } from "semantic-ui-react";
import "./Sidebar.scss";
import SidebarItem from "./SidebarItem/SidebarItem";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import Subscriptions from "./Subscriptions/Subscriptions";
import SidebarFooter from "./SidebarFooter/SidebarFooter";

export default function Sidebar() {
  return (
    <Menu borderless vertical stackable fixed="left" className="side-nav">
      <SidebarItem highlight label="Home" icon="home" />
      <SidebarItem label="Trending" icon="fire" />
      <SidebarItem label="Followers" icon="spy" />
      <Divider />
      <SidebarHeader title="Library" />
      <SidebarItem label="History" icon="history" />
      <SidebarItem label="Watch later" icon="clock" />
      <SidebarItem label="Liked videos" icon="thumbs up" />
      <Divider />
      <Subscriptions />
      <SidebarHeader title="More from YourTube" />
      <SidebarItem label="Movies and Shows" icon="film" />
      <Divider />
      <SidebarItem label="Report History" icon="flag" />
      <SidebarItem label="Help" icon="help circle" />
      <SidebarItem label="Send feedback" icon="comment" />
      <Divider />
      <SidebarFooter />
    </Menu>
  );
}
