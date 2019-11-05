import React from "react";
import "./VidGrid.scss";
import VidPreview from "../VidPreview/VidPreview";

export default function VidGrid({ title }) {
  return (
    <>
      <div className="vid-grid-header">
        <span className="title">{title}</span>
      </div>

      <div className="vid-grid">
        <VidPreview />
        <VidPreview />
        <VidPreview />
        <VidPreview />
        <VidPreview />
        <VidPreview />
        <VidPreview />
        <VidPreview />
        <VidPreview />
        <VidPreview />
        <VidPreview />
        <VidPreview />
      </div>
    </>
  );
}
