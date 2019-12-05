import React from "react";
import "./VidPreview.scss";
import { Image } from "semantic-ui-react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { getVideoDurationString } from "../../services/date/date-format";
import { getShortNumberString } from "../../services/number/number-format";
import { Link } from "react-router-dom";

TimeAgo.locale(en);
const timeAgo = new TimeAgo("en-US");

function VidPreview({ horizontal, video, pathname, search }) {
  const videoDuration = video.contentDetails
    ? getVideoDurationString(video.contentDetails.duration)
    : "";

  const viewCount = video.statistics
    ? getShortNumberString(video.statistics.viewCount)
    : "";

  function formatViewsAndTime(video) {
    const published = new Date(video.snippet.publishedAt);
    return `${viewCount} views · ${timeAgo.format(published, "time")} ago`;
  }

  if (!video) {
    return null;
  }

  return (
    <Link to={{ pathname: pathname, search: search }}>
      <div className={`vid-preview ${horizontal ? "horizontal" : ""}`}>
        <div className="image-container">
          <Image src={video.snippet.thumbnails.medium.url} />
          <div className="time-label">
            <span>{videoDuration}</span>
          </div>
        </div>

        <div className="vid-info">
          <div className="vid-title show-max-two-lines">
            {video.snippet.title}
          </div>
          <div className="vid-preview-metadata-container">
            <div className="channel-title">{video.snippet.channelTitle}</div>

            <div>
              <span>{formatViewsAndTime(video)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default React.memo(VidPreview);
