import React from "react";
import "./VidGrid.scss";
import VidPreview from "../VidPreview/VidPreview";
import { Divider } from "semantic-ui-react";

export default function VidGrid({ title, hideDivider }) {
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
      {hideDivider ? null : <Divider />}
    </>
  );
}
