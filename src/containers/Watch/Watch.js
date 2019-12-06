import React from "react";
import "./Watch.scss";
import Video from "../../components/Video/Video";
import RelatedVids from "../../components/RelatedVids/RelatedVids";
import VidMetaData from "../../components/VidMetaData/VidMetaData";
import VidInfoBox from "../../components/VidInfoBox/VidInfoBox";
import Comments from "../Comments/Comments";
import { useLocation } from "react-router-dom";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import * as watchActions from "../../store/actions/watch";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function Watch() {
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

const mapStateToProps = state => ({
  youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
});

const mapDispatchToProps = dispatch => {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators({ fetchWatchDetails }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Watch);
