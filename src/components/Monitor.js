import React, { Component } from "react";
import { Card, Text, CardItem, Body } from "native-base";

class Monitor extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card transparent style = {{marginTop: 50, marginBottom: 10}}>
                <CardItem style = {{borderWidth: 2, borderRadius: 5, shadowColor: "grey", shadowOpacity: 1, height: 80}}>
                    <Body>
                        <Text style = {{fontSize: 20, fontWeight: "bold"}}>
                            {this.props.display_text}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }
}

export {Monitor};

