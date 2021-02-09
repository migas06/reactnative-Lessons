import React from 'react'
import { View, Text, Button } from 'react-native'

const ColorScreen = () => {
    return (
        <Button
            title = 'Color'
            onPress={() => console.log("clicked")}
        />
    );
}

export default ColorScreen;