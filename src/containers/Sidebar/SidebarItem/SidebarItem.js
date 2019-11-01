import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import "./SidebarItem.scss";

export default function SidebarItem({ highlight, icon, label }) {
  return (
    <Menu.Item className={`sidebar-item ${highlight ? "highlight" : null}`}>
      <div className="sidebar-item-align">
        <span>
          <Icon size="large" name={icon} />
        </span>
        <span>{label}</span>
      </div>
    </Menu.Item>
  );
}
