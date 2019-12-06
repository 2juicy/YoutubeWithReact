import React, { useEffect } from "react";
import "./Layout.scss";
import Header from "../../containers/Header/Header";
import { useLocation } from "react-router-dom";
import { usePrevious } from "../../hooks/usePrevious";

export default function Layout(props) {
  const location = useLocation();
  const prevLocation = usePrevious(location);

  useEffect(() => {
    if (location !== prevLocation && window) window.scrollTo(0, 0);
  });

  return (
    <div className="layout">
      <Header />
      {props.children}
    </div>
  );
}
