import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./screens/routes";

export default class App extends Component {
  render() {
    return <AppNavigator />;
  }
}
