import React from "react";
import {StyleSheet} from "react-native";
import { Button, Text } from "native-base";

const MyButton = (props) => {

    _createStyle = () => {
        if (props.type == "operand") return styles.operandBtnStyle;
        else if (props.type == "operator") return styles.operatorBtnStyle;
        else if (props.type == "zero_button") return styles.zeroBtnStyle;
    }

    _renderText = () => {
        if (props.type == 'operator') return props.symbol;
        return props.value;
    }

    return (
        <Button onPress = {() => props.readData(props.value)} rounded style = {_createStyle()}>
            <Text style = {{fontSize: 32, color: "black"}}>{_renderText()}</Text>
        </Button>
    )
}

export { MyButton };

const styles = StyleSheet.create({
    operandBtnStyle: {
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
    zeroBtnStyle: {
        width: "61%",
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
    }
});