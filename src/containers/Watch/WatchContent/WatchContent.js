import React from "react";
import "./WatchContent.scss";
import Video from "../../../components/Video/Video";
import RelatedVids from "../../../components/RelatedVids/RelatedVids";
import VidMetaData from "../../../components/VidMetaData/VidMetaData";
import VidInfoBox from "../../../components/VidInfoBox/VidInfoBox";
import Comments from "../../Comments/Comments";

function WatchContent({ id }) {
  if (!id) return null;

  return (
    <div className="watch-grid">
      <Video className="video" id={id} />
      <VidMetaData className="metadata" views={9999} />
      <VidInfoBox />
      <Comments />
      {/* <RelatedVids /> */}
    </div>
  );
}

export default React.memo(WatchContent);
