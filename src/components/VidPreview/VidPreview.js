import React from "react";
import "./VidPreview.scss";
import { Image } from "semantic-ui-react";

export default function VidPreview({ horizontal, video }) {
  if (!video) {
    return null;
  }

  return (
    <div className={`vid-preview ${horizontal ? "horizontal" : ""}`}>
      <div className="image-container">
        <Image src={video.snippet.thumbnails.medium.url} />
        <div className="time-label">
          <span>{video.contentDetails.duration}</span>
        </div>
      </div>

      <div className="vid-info">
        <div className="vid-title show-max-two-lines">
          {video.snippet.title}
        </div>
        <div className="vid-preview-metadata-container">
          <div className="channel-title">{video.snippet.channelTitle}</div>

          <p>
            {video.statistics.viewCount} views · {video.snippet.publishedAt}
          </p>
        </div>
      </div>
    </div>
  );
}
