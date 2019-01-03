import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "native-base";
import { WelcomePage, CalculatorPage } from "./src/components/index";

class App extends Component {
  render() {
    return <CalculatorPage />;
  }
}

export default App;

const styles = StyleSheet.create({});
