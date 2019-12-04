import React, { useState, useEffect, useCallback } from "react";
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

  // componentDidUpdate(prevProps) {
  //   if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
  //     this.fetchCategoriesAndMostPopularVideos();
  //   } else if (this.props.videoCategories !== prevProps.videoCategories) {
  //     this.fetchVideosByCategory();
  //   }
  // }

  useEffect(() => {
    console.log("this");
    if (props.youtubeLibraryLoaded) {
      fetchCategoriesAndMostPopularVideos();
    }
  }, [props.youtubeLibraryLoaded]);

  // Functions for fetching
  const fetchVideosByCategory = useCallback(() => {
    const categoryStartIndex = categoryIndex;
    const categories = props.videoCategories.slice(
      categoryStartIndex,
      categoryStartIndex + 3
    );
    props.fetchMostPopularVideosByCategory(categories);
    setCategoryIndex(categoryIndex + 3);
  }, [categoryIndex, props]);

  // Updates videos when videoCategories updates
  useEffect(() => {
    console.log("fetch categories");
    fetchVideosByCategory();
  }, [props.videoCategories]);

  const fetchCategoriesAndMostPopularVideos = () => {
    props.fetchMostPopularVideos();
    props.fetchVideoCategories();
  };

  // Functions for infinite scroll
  const bottomReachedCallback = () => {
    if (!props.videoCategoriesLoaded) return;
    fetchVideosByCategory();
  };

  const showLoader = () => {
    if (props.videoCategoriesLoaded && props.videosByCategoryLoaded) {
      // Due to 404 requests we stop the loader at 18.
      return categoryIndex < 18;
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
