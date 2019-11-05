import React from "react";
import "./NextVid.scss";
import { Checkbox, Divider } from "semantic-ui-react";
import VidPreview from "../VidPreview/VidPreview";

export default function NextVid() {
  return (
    <>
      <div className="next-vid-container">
        <h4>Up next</h4>
        <div className="up-next-toggle">
          <span>Autoplay</span>
          <Checkbox toggle defaultChecked />
        </div>
      </div>
      <VidPreview horizontal />
      <Divider />
    </>
  );
}
