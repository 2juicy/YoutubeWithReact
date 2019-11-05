import React from "react";
import "./Watch.scss";
import Video from "../../components/Video/Video";
import RelatedVids from "../../components/RelatedVids/RelatedVids";

export default function Watch() {
  return (
    <div className="watch-grid">
      <Video className="video" id="0siAhk2DlgA" />
      <div
        className="metadata"
        style={{ width: "100%", height: "100%", backgroundColor: "red" }}
      >
        Metadata
      </div>
      <div
        className="vid-info-box"
        style={{ width: "100%", height: "100%", backgroundColor: "violet" }}
      >
        Video Info Box
      </div>
      <div
        className="comments"
        style={{ width: "100%", height: "100%", backgroundColor: "blue" }}
      >
        Comments
      </div>
      <RelatedVids className="related-vids" />
    </div>
  );
}
