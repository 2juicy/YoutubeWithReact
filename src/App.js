import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import { Switch, Route } from "react-router-dom";
import Watch from "./containers/Watch/Watch";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { youtubeLibraryLoaded } from "./store/actions/api";
require("dotenv").config();

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load("client", () => {
        window.gapi.client.setApiKey(process.env.REACT_APP_API_KEY);
        window.gapi.client.load("youtube", "v3", () => {
          youtubeLibraryLoaded();
        });
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/watch" component={Watch} />
      </Switch>
    </Layout>
  );
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ youtubeLibraryLoaded }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
