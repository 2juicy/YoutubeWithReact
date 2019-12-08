import React from "react";
import "./VidMetaData.scss";
import { Button, Icon } from "semantic-ui-react";
import Rating from "../Rating/Rating";

export default function VidMetaData(props) {
  console.log(props);
  const commas = props.views
    ? props.views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : null;

  return (
    <div className="vid-metadata">
      <h3>{props.video.snippet.title}</h3>
      <div className="vid-stats">
        <span>{commas} views</span>
        <div className="vid-actions">
          <Rating
            likes={props.video.statistics.likeCount}
            dislikes={props.video.statistics.dislikeCount}
          />
          <Button basic icon labelPosition="left">
            <Icon name="share" />
            Share
          </Button>
          <Button basic icon>
            <Icon name="add circle" />
          </Button>
          <Button basic icon>
            <Icon name="ellipsis horizontal" />
          </Button>
        </div>
      </div>
    </div>
  );
}
