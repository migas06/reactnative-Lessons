import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {
const personalName = 'Miguel';
const presentingMyself = <Text style={styles.textStyleSubTitle} >My name is {personalName}</Text>

    return (
        <View>
            <Text style={styles.textStyleTitle}>Getting started with react native!</Text>
            {presentingMyself}
        </View>
    );
};

const styles = StyleSheet.create({
    textStyleTitle: {
        fontSize: 45
    },
    textStyleSubTitle: {
        fontSize: 20
    }

});

export default ComponentScreen;