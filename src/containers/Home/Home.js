import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import HomeContent from "./HomeContent/HomeContent";
import { connect } from "react-redux";
import * as videoActions from "../../store/actions/video";
import { bindActionCreators } from "redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import { youtubeLibraryLoaded } from "../../store/actions/api";

function Home(props) {
  useEffect(() => {
    if (youtubeLibraryLoaded) {
      props.fetchMostPopularVideos();
      props.fetchVideoCategories();
    }
  }, [props]);

  return (
    <>
      <Sidebar />
      <HomeContent />
    </>
  );
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  const fetchVideoCategories = videoActions.categories.request;
  return bindActionCreators(
    { fetchMostPopularVideos, fetchVideoCategories },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
