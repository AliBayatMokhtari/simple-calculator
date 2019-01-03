import React, { Component } from "react"
import { View, StyleSheet, Text } from "react-native"
import { Button } from "native-base";

class CalculatorPage extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <View style = {styles.childViewStyle}>
                    <View style = {{flex: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, marginBottom: 10}}>
                        <Button rounded style = {styles.btnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                1
                            </Text>
                        </Button>
                        <Button rounded style = {styles.btnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                2
                            </Text>
                        </Button>
                        <Button rounded style = {styles.btnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                3
                            </Text>
                        </Button>
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", paddingLeft: 10, marginBottom: 10}}>
                        <Button rounded style = {styles.operatorBtnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                +
                            </Text>
                        </Button>
                    </View>
                </View>
                <View style = {styles.childViewStyle}>
                <View style = {{flex: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, marginBottom: 10}}>
                        <Button rounded style = {styles.btnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                4
                            </Text>
                        </Button>
                        <Button rounded style = {styles.btnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                5
                            </Text>
                        </Button>
                        <Button rounded style = {styles.btnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                6
                            </Text>
                        </Button>
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", paddingLeft: 10, marginBottom: 10}}>
                        <Button rounded style = {styles.operatorBtnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                -
                            </Text>
                        </Button>
                    </View>
                </View>
                <View style = {styles.childViewStyle}>
                <View style = {{flex: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, marginBottom: 10}}>
                        <Button rounded style = {styles.btnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                7
                            </Text>
                        </Button>
                        <Button rounded style = {styles.btnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                8
                            </Text>
                        </Button>
                        <Button rounded style = {styles.btnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                9
                            </Text>
                        </Button>
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", paddingLeft: 10, marginBottom: 10}}>
                        <Button rounded style = {styles.operatorBtnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                *
                            </Text>
                        </Button>
                    </View>
                </View>
                <View style = {styles.childViewStyle}>
                <View style = {{flex: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10}}>
                        <Button  rounded style = {styles.zeroBtnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                0
                            </Text>
                        </Button>
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", paddingLeft: 10}}>
                        <Button rounded style = {styles.operatorBtnStyle}>
                            <Text style = {styles.btnTextStyle}>
                                /
                            </Text>
                        </Button>
                    </View>
                </View>
            </View>
        )
    }
}

export {CalculatorPage}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    childViewStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 5,
    },
    btnStyle: {
        width: 60,
        height: 60,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderColor: "black",
        borderWidth: 2,
        shadowColor: "grey",
        shadowOpacity: 1,
    },
    operatorBtnStyle: {
        width: 60,
        height: 60,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightyellow",
        borderColor: "black",
        borderWidth: 2,
        shadowColor: "grey",
        shadowOpacity: 1,
    },
    zeroBtnStyle: {
        width: "100%",
        height: 60,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        borderColor: "black",
        borderWidth: 2,
        shadowColor: "grey",
        shadowOpacity: 1,
    },
    btnTextStyle: {
        fontSize: 32
    }
})