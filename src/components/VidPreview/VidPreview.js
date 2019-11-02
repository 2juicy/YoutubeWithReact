import React from "react";
import "./VidPreview.scss";
import { Image } from "semantic-ui-react";

export default function VidPreview() {
  return (
    <div className="vid-preview">
      <div className="image-container">
        <Image src="http://via.placeholder.com/210x118" />
        <div className="time-label">
          <span>04:20</span>
        </div>
      </div>

      <div className="vid-info">
        <div className="semi-bold show-max-two-lines">Video Title</div>
        <div className="vid-preview-metadata-container">
          <div className="channel-title">Channel Title</div>
          <div>
            <span>24M views • 22 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
