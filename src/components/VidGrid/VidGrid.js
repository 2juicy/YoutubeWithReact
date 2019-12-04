import React from "react";
import "./VidGrid.scss";
import VidPreview from "../VidPreview/VidPreview";

function VidGrid({ title, videos }) {
  if (!videos || !videos.length) {
    return null;
  }

  return (
    <>
      <div className="vid-grid-header">
        <span className="title">{title}</span>
      </div>

      <div className="vid-grid">
        {videos.map(video => (
          <VidPreview video={video} key={video.id} />
        ))}
      </div>
    </>
  );
}

export default React.memo(VidGrid);
