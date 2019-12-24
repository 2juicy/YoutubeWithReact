import React, { useState } from "react";
import "./VidInfoBox.scss";
import { Button, Image } from "semantic-ui-react";
import Linkify from "react-linkify";

export default function VidInfoBox({ video }) {
  const [collapse, setCollapse] = useState(true);
  const buttonTitle = collapse ? "Show More" : "Show Less";

  const videoDescription = video.snippet ? video.snippet.description : null;

  console.log(videoDescription);

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
        <div className={collapse ? "collapsed" : "expanded"}>
          <p>Paragraph...</p>
          <p>Paragraph...</p>
          <p>Paragraph...</p>
          <p>Paragraph...</p>
          <p>Paragraph...</p>
        </div>
        <Button onClick={() => setCollapse(state => !state)} compact>
          {buttonTitle}
        </Button>
      </div>
    </div>
  );
}
