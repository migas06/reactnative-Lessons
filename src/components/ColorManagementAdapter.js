import React from 'react'
import { Text, Button, View } from 'react-native'

const ColorManagementAdapter = ({ color, onIncrease, onDecrease }) => {

    return (
        <View>

            <Text>{color}</Text>
            <Button
                title={`Increase ${color}`}
                onPress={ () => onIncrease()}
            />

            <View style={{ height: 1 }} />

            <Button
                title={`Decrease ${color}`}
                onPress={() => onDecrease()} />

            <View style={{ height: 10 }} />

        </View>
    );

}

export default ColorManagementAdapter;