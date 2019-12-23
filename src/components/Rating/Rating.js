import React from "react";
import "./Rating.scss";
import { Icon, Progress } from "semantic-ui-react";
import { getShortNumberString } from "../../services/number/number-format";

export default function Rating({ likes, dislikes }) {
  let percent = null;
  let likeCount = likes !== 0 ? likes : null;
  let dislikeCount = null;

  if (likes && dislikes) {
    const amountLikes = parseInt(likes);
    const amountDislikes = parseInt(dislikes);
    const ratingPercent = 100 * (amountLikes / (amountLikes + amountDislikes));

    percent = <Progress percent={ratingPercent} size="tiny" />;
    likeCount = getShortNumberString(amountLikes);
    dislikeCount = getShortNumberString(amountDislikes);
  }

  return (
    <div className="rating">
      <div className="thumbs-up">
        <Icon name="thumbs outline up" />
        <span>{likeCount}</span>
      </div>

      <div className="thumbs-down">
        <Icon name="thumbs outline down" />
        <span>{dislikeCount}</span>
      </div>
      {percent}
    </div>
  );
}
