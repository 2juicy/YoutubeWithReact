import React from "react";
import "./InfiniteScroll.scss";
import { Waypoint } from "react-waypoint";
import { Loader } from "semantic-ui-react";

export default function InfiniteScroll(props) {
  return (
    <>
      {props.children}
      <Waypoint onEnter={props.bottomReachedCallback}>
        <div className="loader-container">
          <Loader active={props.showLoader} inline="centered" />
        </div>
      </Waypoint>
    </>
  );
}
