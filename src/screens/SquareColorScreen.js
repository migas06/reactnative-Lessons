import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorManagementAdapter from "../components/ColorManagementAdapter";

const SquareColorScreen = () => {

    const [redColor, setRedColor] = useState(0);
    const [greenColor, setGreenColor] = useState(0);
    const [blueColor, setBlueColor] = useState(0);

    return (
        <View>
            <ColorManagementAdapter color='Red'
                onIncrease={() => setRedColor(redColor + 15)}
                onDecrease={() => setRedColor(redColor - 15)} />

            <ColorManagementAdapter
                color='Green'
                onIncrease={() => setGreenColor(greenColor + 15)}
                onDecrease={() => setGreenColor(greenColor - 15)} />


            <ColorManagementAdapter
                color='Blue'
                onIncrease={() => setBlueColor(blueColor + 15)}
                onDecrease={() => setBlueColor(blueColor - 15)}
            />

            <View style=
                {{
                    height: 100,
                    width: 100,
                    backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})`
                }}
            />
        </View>
    );

}


export default SquareColorScreen;