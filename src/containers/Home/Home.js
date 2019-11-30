import React from "react";
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

class Home extends React.Component {
  state = {
    categoryIndex: 0
  };

  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.fetchCategoriesAndMostPopularVideos();
    } else if (this.props.videoCategories !== prevProps.videoCategories) {
      this.fetchVideosByCategory();
    }
  }

  // Functions for fetching
  fetchVideosByCategory() {
    const categoryStartIndex = this.state.categoryIndex;
    const categories = this.props.videoCategories.slice(
      categoryStartIndex,
      categoryStartIndex + 3
    );
    this.props.fetchMostPopularVideosByCategory(categories);
    this.setState(prevState => {
      return {
        categoryIndex: prevState.categoryIndex + 3
      };
    });
  }

  fetchCategoriesAndMostPopularVideos() {
    this.props.fetchMostPopularVideos();
    this.props.fetchVideoCategories();
  }

  // Functions for infinite scroll
  bottomReachedCallback = () => {
    if (!this.props.videoCategoriesLoaded) return;
    this.fetchVideosByCategory();
  };

  showLoader() {
    if (this.props.videoCategoriesLoaded && this.props.videosByCategoryLoaded) {
      // Due to 404 requests we stop the loader at 18.
      return this.state.categoryIndex < 18;
    }
    return false;
  }

  render() {
    return (
      <>
        <Sidebar />
        <HomeContent
          bottomReachedCallback={this.bottomReachedCallback}
          showLoader={this.showLoader()}
        />
      </>
    );
  }
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
