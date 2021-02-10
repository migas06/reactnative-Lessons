import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorManagementAdapter from "../components/ColorManagementAdapter";

const COLOR_INCREMENT = 15;

const SquareColorScreen = () => {

    const [redColor, setRedColor] = useState(0);
    const [greenColor, setGreenColor] = useState(0);
    const [blueColor, setBlueColor] = useState(0);

    const setColor = (color, change) => {
        //Color === 'red', 'green', or 'blue'
        //Change === +15 or -15

        switch (color) {
            case 'red':
                redColor + change > 255 || redColor + change < 0 ? null : setRedColor(redColor + change);
                return;
            case 'green':
                greenColor + change > 255 || greenColor + change < 0 ? null : setGreenColor(greenColor + change);
                return;
            case 'blue':
                blueColor + change > 255 || blueColor + change < 0 ? null : setBlueColor(blueColor + change);
                return;
            default:
                return;

        }
    }

    return (
        <View>
            <ColorManagementAdapter color='Red'
                onIncrease={() => setColor('red', COLOR_INCREMENT)}
                onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} />

            <ColorManagementAdapter
                color='Green'
                onIncrease={() => setColor('green', COLOR_INCREMENT)}
                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} />


            <ColorManagementAdapter
                color='Blue'
                onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
            />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})` }}
            />
        </View>
    );

}


export default SquareColorScreen;