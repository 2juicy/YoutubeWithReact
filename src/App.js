import React from "react";
import Layout from "./components/Layout/Layout";
import Home from "./containers/Home/Home";
import { Switch, Route } from "react-router-dom";
import Watch from "./containers/Watch/Watch";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/watch" component={Watch} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  );
}
