import React from "react";
import "./HomeContent.scss";
import VidGrid from "../../../components/VidGrid/VidGrid";

export default function HomeContent() {
  return (
    <div className="home-content">
      <div className="responsive-vid-grid-container">
        <VidGrid title="Trending" />
        <VidGrid title="Music" />
        <VidGrid title="Anime" />
      </div>
    </div>
  );
}
