import React from "react";
import "./Rating.scss";
import { Icon, Progress } from "semantic-ui-react";

export default function Rating({ likes, dislikes, hideProgress }) {
  const percent = likes && dislikes ? 100 * (likes / (likes + dislikes)) : null;
  console.log(percent);

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
      {percent && !hideProgress ? (
        <Progress className="progress" percent={percent} size="tiny" />
      ) : null}
    </div>
  );
}
