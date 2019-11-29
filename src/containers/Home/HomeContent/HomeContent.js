import React from "react";
import "./HomeContent.scss";
import VidGrid from "../../../components/VidGrid/VidGrid";
import {
  getMostPopularVideos,
  getVideosByCategory
} from "../../../store/reducers/video";
import { connect } from "react-redux";

function HomeContent(props) {
  const AMOUNT_TRENDING_VIDEOS = 12;
  const trendingVideos = props.mostPopularVideos.slice(
    0,
    AMOUNT_TRENDING_VIDEOS
  );
  const categoryGrids = getVideoGridsForCategories();

  function getVideoGridsForCategories() {
    const categoryTitles = Object.keys(props.videosByCategory || {});
    return categoryTitles.map(categoryTitle => {
      const videos = props.videosByCategory[categoryTitle];
      return (
        <VidGrid title={categoryTitle} videos={videos} key={categoryTitle} />
      );
    });
  }

  return (
    <div className="home-content">
      <div className="responsive-vid-grid-container">
        <VidGrid title="Trending" videos={trendingVideos} />
        {categoryGrids}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    videosByCategory: getVideosByCategory(state),
    mostPopularVideos: getMostPopularVideos(state)
  };
}

export default connect(mapStateToProps, null)(HomeContent);
