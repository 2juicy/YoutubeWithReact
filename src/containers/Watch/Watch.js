import React, { useEffect } from "react";
import "./Watch.scss";
import WatchContent from "./WatchContent/WatchContent";
import { useLocation } from "react-router-dom";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import * as watchActions from "../../store/actions/watch";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

function Watch(props) {
  // Function for finding URL then fetch with hook
  const location = useLocation();
  function getVideoId() {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get("v");
  }
  const videoId = getVideoId();

  // ComponentDidUpdate
  useEffect(() => {
    if (props.youtubeLibraryLoaded) {
      props.fetchWatchDetails(videoId);
    }
  }, [videoId]);

  return <WatchContent id={videoId} />;
}

const mapStateToProps = state => ({
  youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
});

function mapDispatchToProps(dispatch) {
  const fetchWatchDetails = watchActions.details.request;
  return bindActionCreators({ fetchWatchDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Watch);
