import React from "react";
import "./WatchContent.scss";
import Video from "../../../components/Video/Video";
import RelatedVids from "../../../components/RelatedVids/RelatedVids";
import VidMetaData from "../../../components/VidMetaData/VidMetaData";
import VidInfoBox from "../../../components/VidInfoBox/VidInfoBox";
import Comments from "../../Comments/Comments";
import { getVideoById } from "../../../store/reducers/video";
import { connect } from "react-redux";

function WatchContent(props) {
  console.log(props);
  if (!props.id) return null;

  return (
    <div className="watch-grid">
      <Video className="video" id={props.id} />
      <VidMetaData className="metadata" video={props.video} />
      <VidInfoBox />
      <Comments />
      {/* <RelatedVids /> */}
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  video: getVideoById(state, props.id)
});

export default connect(mapStateToProps, null)(WatchContent);
