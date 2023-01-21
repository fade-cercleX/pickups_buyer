import { StatusBar } from "expo-status-bar";
import React, { useState , useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Authenticated from "./navigation/Authenticated";
import * as Font from "expo-font";

export default function App() {
  const [fontloaded, setFontLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      circular: require("./assets/fonts/CircularStd-Book.otf"),
    })
      .then(() => {
        setFontLoaded(true);
      })
      .catch((ex) => {
        console.log(ex);
      });
  }, []);

  if (!fontloaded) return null;

  return (
      <Authenticated />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
