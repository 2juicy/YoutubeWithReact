import React from "react";
import { Menu } from "semantic-ui-react";
import "./Sidebar.scss";

export default function Sidebar() {
  return (
    <Menu borderless vertical stackable fixed="left" className="side-nav">
      <h1>setup</h1>
    </Menu>
  );
}
