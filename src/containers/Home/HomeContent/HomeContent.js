import React from "react";
import "./HomeContent.scss";
import VidGrid from "../../../components/VidGrid/VidGrid";
import { getMostPopularVideos } from "../../../store/reducers/video";
import { connect } from "react-redux";

function HomeContent(props) {
  const AMOUNT_TRENDING_VIDEOS = 12;
  const trendingVideos = props.mostPopularVideos.slice(
    0,
    AMOUNT_TRENDING_VIDEOS
  );

  return (
    <div className="home-content">
      <div className="responsive-vid-grid-container">
        <VidGrid title="Trending" videos={trendingVideos} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    mostPopularVideos: getMostPopularVideos(state)
  };
}

export default connect(mapStateToProps, null)(HomeContent);
