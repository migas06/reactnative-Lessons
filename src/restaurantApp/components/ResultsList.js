import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'


const ResultsList = ({ navigation, results, title }) => {
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                data={results}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => { return result.id; }}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={ () => {
                                navigation.navigate('ResultsDetailScreen')
                            }}>
                            <ResultsDetail result={item} />
                        </TouchableOpacity>

                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default withNavigation (ResultsList);