import React from "react";
import { Menu } from "semantic-ui-react";
import "./SidebarHeader.scss";

export default function SidebarHeader({ title }) {
  return (
    <Menu.Item>
      <Menu.Header className="sidebar-header">
        {title.toUpperCase()}
      </Menu.Header>
    </Menu.Item>
  );
}
