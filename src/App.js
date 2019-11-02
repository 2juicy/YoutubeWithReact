import React from "react";
import Header from "./containers/Header/Header";
import Sidebar from "./containers/Sidebar/Sidebar";
import Home from "./containers/Home/Home";

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Home />
    </>
  );
}
