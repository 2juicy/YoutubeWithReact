import React from "react";
import { Menu, Image, Form, Input, Icon } from "semantic-ui-react";
import "./Header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Menu borderless className="top-menu" fixed="top">
      <Menu.Item header className="logo">
        <Link to="/">
          <Image src={process.env.PUBLIC_URL + "/YourTube.png"} size="mini" />
        </Link>
        <Link to="/">
          <h2>YourTube</h2>
        </Link>
      </Menu.Item>

      <Menu.Menu className="nav-container">
        <Menu.Item className="search-input">
          <Form>
            <Form.Field>
              <Input placeholder="Search" size="small" action="Go" />
            </Form.Field>
          </Form>
        </Menu.Item>
      </Menu.Menu>
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon className="header-icon" name="video camera" size="large" />
        </Menu.Item>
        <Menu.Item>
          <Icon className="header-icon" name="grid layout" size="large" />
        </Menu.Item>
        <Menu.Item>
          <Icon className="header-icon" name="alarm" size="large" />
        </Menu.Item>
        <Menu.Item name="avatar">
          <Image
            src="https://yt3.ggpht.com/a-/AAuE7mBQq0sOlxUxcp71beNsH8PsR0WyTPbc1S6cJA=s88-c-k-c0x00ffffff-no-rj-mo"
            avatar
          />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}
