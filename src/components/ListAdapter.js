import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ListAdapter = ({image, title, score}) => {

    return (
        <View style={styles.flexView}>
            <Image source = {image} />
            <Text>{title}</Text>
            <Text>Image score - {score}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    flexView : {
        width: 300,
    }
});

export default ListAdapter;