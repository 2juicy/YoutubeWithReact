import React, { useState } from "react";
import "./VidInfoBox.scss";
import { Button, Image } from "semantic-ui-react";

export default function VidInfoBox() {
  const [toggleCollapse, setToggle] = useState(true);
  let collapse = toggleCollapse ? "collapsed" : "expanded";
  let buttonTitle = toggleCollapse ? "Show More" : "Show Less";

  return (
    <div className="vid-info-box">
      <Image
        className="channel-img"
        src="http://via.placeholder.com/48x48"
        circular
      />
      <div className="vid-info">
        <div className="channel-name">Channel Name</div>
        <div className="vid-publish-date">Fri 13, 2019</div>
      </div>
      <Button color="youtube">12.3K Subscribe</Button>
      <div className="vid-description">
        <div className={collapse}>
          <p>Paragraph...</p>
          <p>Paragraph...</p>
          <p>Paragraph...</p>
          <p>Paragraph...</p>
          <p>Paragraph...</p>
        </div>
        <Button onClick={() => setToggle(state => !state)} compact>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
}
