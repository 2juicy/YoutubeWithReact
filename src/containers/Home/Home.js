import React from "react";
import "./Home.scss";
import VidGrid from "../../components/VidGrid/VidGrid";
import Sidebar from "../Sidebar/Sidebar";

export default function Home() {
  return (
    <>
      <Sidebar />
      <div className="home">
        <div className="responsive-vid-grid-container">
          <VidGrid title="Trending" />
          <VidGrid title="Music" />
          <VidGrid title="Anime" />
        </div>
      </div>
    </>
  );
}
