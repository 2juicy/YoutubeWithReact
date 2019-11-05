import React from "react";
import "./RelatedVids.scss";
import VidPreview from "../VidPreview/VidPreview";

export default function RelatedVids() {
  return (
    <div className="related-vids">
      <VidPreview horizontal />
      <VidPreview horizontal />
      <VidPreview horizontal />
      <VidPreview horizontal />
      <VidPreview horizontal />
    </div>
  );
}
