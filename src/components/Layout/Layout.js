import React from "react";
import "./Layout.scss";
import Header from "../../containers/Header/Header";

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />
      {props.children}
    </div>
  );
}
