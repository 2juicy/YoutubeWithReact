import React from "react";
import "./Watch.scss";
import Video from "../../components/Video/Video";
import RelatedVids from "../../components/RelatedVids/RelatedVids";
import VidMetaData from "../../components/VidMetaData/VidMetaData";

export default function Watch() {
  return (
    <div className="watch-grid">
      <Video className="video" id="0siAhk2DlgA" />
      <VidMetaData className="metadata" viewCount={9999} />
      <div
        className="vid-info-box"
        style={{ width: "100%", height: "100px", backgroundColor: "violet" }}
      >
        Video Info Box
      </div>
      <div
        className="comments"
        style={{ width: "100%", height: "100px", backgroundColor: "blue" }}
      >
        Comments
      </div>
      <RelatedVids className="related-vids" />
    </div>
  );
}
