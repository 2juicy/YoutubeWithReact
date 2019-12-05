import React from "react";
import "./Watch.scss";
import Video from "../../components/Video/Video";
import RelatedVids from "../../components/RelatedVids/RelatedVids";
import VidMetaData from "../../components/VidMetaData/VidMetaData";
import VidInfoBox from "../../components/VidInfoBox/VidInfoBox";
import Comments from "../Comments/Comments";
import { useLocation } from "react-router-dom";

export default function Watch() {
  const location = useLocation();

  const getVideoId = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("v");
  };

  return (
    <div className="watch-grid">
      <Video className="video" id="L14hxW2SN68" />
      <VidMetaData className="metadata" views={9999} />
      <VidInfoBox />
      <Comments />
      {/* <RelatedVids /> */}
    </div>
  );
}
