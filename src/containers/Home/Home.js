import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import HomeContent from "./HomeContent/HomeContent";
import { connect } from "react-redux";
import * as videoActions from "../../store/actions/video";
import { bindActionCreators } from "redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import { youtubeLibraryLoaded } from "../../store/actions/api";
import { getVideoCategoryIds } from "../../store/reducers/video";

function Home(props) {
  // const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    if (youtubeLibraryLoaded) {
      props.fetchMostPopularVideos();
      props.fetchVideoCategories();
    }
  }, []);

  // useEffect(() => {
  //   effect;
  //   return () => {
  //     cleanup;
  //   };
  // }, [props]);

  return (
    <>
      <Sidebar />
      <HomeContent />
    </>
  );
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  const fetchVideoCategories = videoActions.categories.request;
  const fetchMostPopularVideosByCategory =
    videoActions.mostPopularByCategory.request;
  return bindActionCreators(
    {
      fetchMostPopularVideos,
      fetchVideoCategories,
      fetchMostPopularVideosByCategory
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
