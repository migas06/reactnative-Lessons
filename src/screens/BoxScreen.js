import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyleOne}>Child 1</Text>
            <Text style={styles.textStyleTwo}>Child 2</Text>
            <Text style={styles.textStyleThree}>Child 3</Text>
        </View>
    );
}

/*

Parent:
alignItems
justifyContent
flexDirection

Child
flex
alignSelf

*/

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
    },

    textStyleOne: {
        borderWidth: 1, 
        margin: 20,
        borderColor: 'red',
        padding: 15
    },

    textStyleTwo: {
        borderWidth: 1, 
        margin: 20,
        borderColor: 'red',
        padding: 15,

        //...StyleSheet.absoluteFillObject,
        //  |
        //  v
        /*
        position: 'absolute',
        top:0,
        right:0,
        left: 0,
        bottom: 0*/
    },

    textStyleThree: {
        borderWidth: 1, 
        margin: 20,
        borderColor: 'red',
        padding: 15, 
    }
});

export default BoxScreen;