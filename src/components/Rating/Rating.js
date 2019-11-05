import React from "react";
import "./Rating.scss";
import { Icon, Progress } from "semantic-ui-react";

export default function Rating({ likes, dislikes }) {
  const percent = 100 * (likes / (likes + dislikes));

  return (
    <div className="rating">
      <div className="thumbs-up">
        <Icon name="thumbs outline up" />
        <span>{likes}</span>
      </div>

      <div className="thumbs-down">
        <Icon name="thumbs outline down" />
        <span>{dislikes}</span>
      </div>
      <Progress className="progress" percent={percent} size="tiny" />
    </div>
  );
}
