import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Home(): JSX.Element {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button mode="contained" icon="camera">
        Press me
      </Button>

      <StatusBar />
    </View>
  );
}
