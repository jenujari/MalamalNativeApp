import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Register from "./../PageComponents/Open/Register";
import SiginIn from "./../PageComponents/Open/SignIn";

const Stack = createStackNavigator();

export default function OpenStack(): JSX.Element {
  return (
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="Sign In" component={SiginIn} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
