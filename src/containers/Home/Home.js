import React, { useState, useEffect } from "react";
import { usePrevious } from "./usePrevious";
import Sidebar from "../Sidebar/Sidebar";
import HomeContent from "./HomeContent/HomeContent";
import { connect } from "react-redux";
import * as videoActions from "../../store/actions/video";
import { bindActionCreators } from "redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import {
  getVideoCategoryIds,
  videosByCategoryLoaded,
  videoCategoriesLoaded
} from "../../store/reducers/video";

function Home(props) {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const prevYoutubeLibraryLoaded = usePrevious(props.youtubeLibraryLoaded);
  const prevVideoCategories = usePrevious(props.videoCategories);

  // componentDidUpdate(prevProps) {
  //   if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
  //     this.fetchCategoriesAndMostPopularVideos();
  //   } else if (this.props.videoCategories !== prevProps.videoCategories) {
  //     this.fetchVideosByCategory();
  //   }
  // }

  useEffect(() => {
    console.log("this");
    if (props.youtubeLibraryLoaded !== prevYoutubeLibraryLoaded) {
      console.log("library");
      props.fetchMostPopularVideos();
      props.fetchVideoCategories();
    } else if (props.videoCategories !== prevVideoCategories) {
      console.log("fetch");
      fetchVideosByCategory();
    }
  });

  // Functions for fetching
  const fetchVideosByCategory = () => {
    const categoryStartIndex = categoryIndex;
    const categories = props.videoCategories.slice(
      categoryStartIndex,
      categoryStartIndex + 3
    );
    props.fetchMostPopularVideosByCategory(categories);
    setCategoryIndex(categoryIndex + 3);
  };

  // Functions for infinite scroll
  const bottomReachedCallback = () => {
    if (!props.videoCategoriesLoaded) return;
    fetchVideosByCategory();
  };

  const showLoader = () => {
    if (props.videoCategoriesLoaded && props.videosByCategoryLoaded) {
      // Due to 404 requests we stop the loader at 19.
      return categoryIndex < 19;
    }
    return false;
  };

  return (
    <>
      <Sidebar />
      <HomeContent
        bottomReachedCallback={bottomReachedCallback}
        showLoader={showLoader()}
      />
    </>
  );
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state),
    videoCategories: getVideoCategoryIds(state),
    videoCategoriesLoaded: videoCategoriesLoaded(state),
    videosByCategoryLoaded: videosByCategoryLoaded(state)
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
