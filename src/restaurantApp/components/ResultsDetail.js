import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text>{result.name}</Text>
            <Text style={styles.ratingStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerStyle: {
        margin: 5
    },

    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 4
    },

    ratingStyle: {
        color: 'gray'
    }

});

export default ResultsDetail;