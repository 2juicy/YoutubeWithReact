import React from "react";
import { Menu, Image } from "semantic-ui-react";
import "./Header.scss";

export default function Header() {
  return (
    <Menu borderless className="top-menu" fixed="top">
      <Menu.Item header className="logo">
        <Image src={process.env.PUBLIC_URL + "/YourTube.png"} size="tiny" />
        <h1>YourTube</h1>
      </Menu.Item>
      <Menu.Menu className="nav-container">
        klawjdklwajkldwajkldawjwda
      </Menu.Menu>
    </Menu>
  );
}
