import React from "react";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import { Switch, Route } from "react-router-dom";
import Watch from "./containers/Watch/Watch";
require("dotenv").config();

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/watch" component={Watch} />
      </Switch>
    </Layout>
  );
}
