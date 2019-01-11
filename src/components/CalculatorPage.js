import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { MyButton, Monitor } from "./index";

const operator = ['+', '(', ')', '-', '*', '/'];
const weight = {'+': 1, '-': 1, '*': 2, '/': 2, '(': 0}
const isOperator = (char) => {
    return operator.includes(char);
}

class CalculatorPage extends Component {

    state = {
        value: "0"
    }

    readBtnValue = (v) => {
        switch (v) {
            case '=': {
                this.setState({
                    value: this.calculateInfix()
                })
                break;
            }
            case 'C': {
                this.setState({
                    value: '0'
                });
                break;
            }
            case '.': {
                this.setState((prevState) => (
                    {value: prevState.value + v}
                ));
                break;
            }
            default: {
                this.setState((prevState) => (
                    prevState.value == '0' ? {value: v} : {value: prevState.value + v}
                ));
            }
        }
    }

    calculateInfix = () => {
        const infix = this.state.value;
        let stack = [];
        let infix_array = [];
        let tmp = '';
        for (let i = 0; i < infix.length; ++i) {
            if (!isOperator(infix[i])) tmp += infix[i];
            else {
                if (tmp != '') infix_array.push(parseFloat(tmp));
                infix_array.push(infix[i]);
                tmp = '';
            }
            if (i == infix.length - 1 && tmp != '') infix_array.push(parseFloat(tmp));
        }
        // console.log(infix_array);
        // let's create our postfix expression
        const postfix = [];
        for (let i = 0; i < infix_array.length; ++i) {
            const element = infix_array[i];
            // if the element is operand then it goes to postfix expression directly
            if (!isOperator(element)) {
                postfix.push(element);
            } else {
                if (stack.length == 0) stack.push(element);
                else {
                    if (element == '(') stack.push(element);
                    else if (element == ')') {
                        while (stack[stack.length - 1] != '(') postfix.push(stack.pop());
                        stack.pop();
                    } else if (weight[element] <= weight[stack[stack.length - 1]]) {
                        while (weight[element] <= weight[stack[stack.length - 1]] && stack.length != 0) postfix.push(stack.pop());
                        stack.push(element);
                    } else stack.push(element);
                }
            }
        }
        while (stack.length != 0) postfix.push(stack.pop());
        // console.log(postfix);
        // let's evaluate the postfix expression
        for (let i = 0; i < postfix.length; ++i) {
            const element = postfix[i];
            if (!isOperator(element)) stack.push(element);
            else {
                console.log(stack);
                const operand2 = stack.pop();
                const operand1 = stack.pop();
                switch (element) {
                    case '+': {
                        stack.push(operand1 + operand2);
                        break;
                    }
                    case '-': {
                        stack.push(operand1 - operand2);
                        break;
                    }
                    case '*': {
                        stack.push(operand1 * operand2);
                        break;
                    }
                    case '/': {
                        stack.push(operand1 / operand2);
                        break;
                    }
                }
            }
        }
        const result = stack.pop();
        return result;
    }

    render() {
        return (
            <View style = {styles.container}>
                <View>
                    <Monitor display_text = {this.state.value} />
                </View>
                <View style = {styles.childViewStyle}>
                    <View style = {{flex: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, marginBottom: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "operator" value = "(" symbol = "(" />
                        <MyButton readData = {this.readBtnValue} type = "operator" value = ")" symbol = ")" />
                        <MyButton readData = {this.readBtnValue} type = "operator" value = "C" symbol = "C" />
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", paddingLeft: 10, marginBottom: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "operator" value = "+" symbol = "+" />
                    </View>
                </View>
                <View style = {styles.childViewStyle}>
                    <View style = {{flex: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, marginBottom: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "1" />
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "2" />
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "3" />
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", paddingLeft: 10, marginBottom: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "operator" value = "-" symbol = "−" />
                    </View>
                </View>
                <View style = {styles.childViewStyle}>
                <View style = {{flex: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, marginBottom: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "4" />
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "5" />
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "6" />
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", paddingLeft: 10, marginBottom: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "operator" value = "*" symbol = "×" />
                    </View>
                </View>
                <View style = {styles.childViewStyle}>
                <View style = {{flex: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10, marginBottom: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "7" />
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "8" />
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "9" />
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", paddingLeft: 10, marginBottom: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "operator" value = "/" symbol = "÷" />
                    </View>
                </View>
                <View style = {styles.childViewStyle}>
                <View style = {{flex: 3, flexDirection: "row", justifyContent: "space-between", paddingLeft: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "zero_button" value = "0" />
                        <MyButton readData = {this.readBtnValue} type = "operand" value = "." />
                    </View>
                    <View style = {{flex: 1, flexDirection: "row", justifyContent: "center", paddingLeft: 10}}>
                        <MyButton readData = {this.readBtnValue} type = "operator" value = "=" symbol = "=" />
                    </View>
                </View>
            </View>
        )
    }
}

export { CalculatorPage }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    childViewStyle: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 5,
    }
})