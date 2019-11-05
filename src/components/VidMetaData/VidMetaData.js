import React from "react";
import "./VidMetaData.scss";
import { Divider } from "semantic-ui-react";

export default function VidMetaData({ views }) {
  return (
    <div className="vid-metadata">
      <h3>Video Title</h3>
      <div className="vid-stats">
        <span>{views} views</span>
      </div>
      <Divider />
    </div>
  );
}
