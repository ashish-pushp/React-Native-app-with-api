import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "./loginScreen";
import RegistrationScreen from "./registrationScreen";
import ListScreen from "./homescreen";

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Registration: { screen: RegistrationScreen },
  ListScreen: { screen: ListScreen }
});

export default createAppContainer(AppNavigator);
