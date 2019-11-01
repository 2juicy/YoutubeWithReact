import React from "react";
import { Divider } from "semantic-ui-react";
import SidebarHeader from "../SidebarHeader/SidebarHeader";
import Subscription from "./Subscription/Subscription";

export default function Subscriptions() {
  return (
    <>
      <SidebarHeader title="Subscriptions" />
      <Subscription label="Diversity" broadcasting />
      <Subscription label="NoCopyrightSounds" newVids={5} />

      <Divider />
    </>
  );
}
