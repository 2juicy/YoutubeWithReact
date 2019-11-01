import React from "react";
import { Icon, Image, Menu } from "semantic-ui-react";
import "./Subscription.scss";

export default function Subscription({ broadcasting, newVids, label }) {
  return (
    <Menu.Item>
      <div className="subscription">
        <div>
          <Image avatar src="https://via.placeholder.com/28x28" />
          <span>{label}</span>
        </div>
        {broadcasting ? (
          <Icon name="signal" />
        ) : newVids ? (
          <span className="new-vids-count">{newVids}</span>
        ) : null}
      </div>
    </Menu.Item>
  );
}
