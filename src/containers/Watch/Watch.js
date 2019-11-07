import React from "react";
import "./Watch.scss";
import Video from "../../components/Video/Video";
import RelatedVids from "../../components/RelatedVids/RelatedVids";
import VidMetaData from "../../components/VidMetaData/VidMetaData";
import VidInfoBox from "../../components/VidInfoBox/VidInfoBox";
import Comments from "../Comments/Comments";

export default function Watch() {
  return (
    <div className="watch-grid">
      <Video className="video" id="L14hxW2SN68" />
      <VidMetaData className="metadata" views={9999} />
      <VidInfoBox />
      <Comments />
      <RelatedVids />
    </div>
  );
}
