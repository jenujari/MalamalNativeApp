import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "./../PageComponents/Home/index";

const Stack = createStackNavigator();

export default function HomeStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
