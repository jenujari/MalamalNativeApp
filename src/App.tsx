import React from "react";

import HomeStack from "./stacks/HomeStack";
import OpenStack from "./stacks/OpenStack";

export default function App(): JSX.Element {
  const userToken = true;

  return <>{userToken === true ? <HomeStack /> : <OpenStack />}</>;
}
