import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import App from "./src/App";

const theme = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

const AppProvider = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={theme}>
        <App />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AppProvider;
