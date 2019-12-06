import React from "react";
import "./Video.scss";

export default function Video({ id }) {
  if (!id) {
    return null;
  }

  return (
    <div className="video-container">
      <div className="video">
        <iframe
          className="video-player"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          frameBorder="0"
          title="video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
