import React, { Component } from "react"
import { StyleSheet, View, Image } from "react-native"

class WelcomePage extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Image style = {styles.logoStyle} source = {require("../images/Logo.jpg")}/>
      </View>
    )
  }
}

export { WelcomePage }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logoStyle: {
    width: "100%",
    height: 390,
  }
})
