import React from "react";
import { Divider } from "semantic-ui-react";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import Subscription from "./Subscription/Subscription";

export default function Subscriptions() {
  return (
    <>
      <SidebarHeader title="Subscriptions" />
      <Subscription label="Diversity" broadcasting />
      <Subscription label="Pop Music - Topic" newVids={121} />
      <Subscription label="Blume" newVids={8} />
      <Subscription label="NoCopyrightSounds" newVids={5} />
      <Subscription label="Nightblue Music" newVids={11} />
      <Subscription label="DØVYDAS" newVids={2} />
      <Subscription label="Chill Nation" newVids={33} />
      <Subscription label="CS50" />
      <Divider />
    </>
  );
}
