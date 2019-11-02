import React from "react";
import "./Home.scss";
import VidGrid from "../../components/VidGrid/VidGrid";

export default function Home() {
  return (
    <div className="home">
      <div className="responsive-vid-grid-container">
        <VidGrid title="Trending" />
        <VidGrid title="Music" />
        <VidGrid title="Anime" hideDivider />
      </div>
    </div>
  );
}
