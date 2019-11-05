import React from "react";
import "./RelatedVids.scss";
import VidPreview from "../VidPreview/VidPreview";
import NextVid from "../NextVid/NextVid";

export default function RelatedVids() {
  return (
    <div className="related-vids">
      <NextVid />
      <VidPreview horizontal />
      <VidPreview horizontal />
      <VidPreview horizontal />
    </div>
  );
}
