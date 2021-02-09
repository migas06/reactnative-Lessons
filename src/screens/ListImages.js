import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import ListAdapter from '../components/ListAdapter'

const ListScreen = () => {

    /*const friends = [
        {title : 'Friend #1', image : 'Age 14'},
        {name : 'Friend #2', age : 'Age 12'},
        {name : 'Friend #3', age : 'Age 16'},
        {name : 'Friend #4', age : 'Age 23'},
    ]*/


    return (
        <View>
            <ListAdapter
                title="Forest"
                image={require('../../assets/forest.jpg')}
                score = "123"
            />

            <ListAdapter
                title="Mountain"
                image={require('../../assets/mountain.jpg')}
                score = "12"
            />

            <ListAdapter
                title="Beach"
                image={require('../../assets/beach.jpg')}
                score = "3"
            />
        </View>
    );
}


const styles = StyleSheet.create({

})


export default ListScreen;