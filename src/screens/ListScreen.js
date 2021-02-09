import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

const ListScreen = () => {

    const friends = [
        {name : 'Friend #1', age : 'Age 14'},
        {name : 'Friend #2', age : 'Age 12'},
        {name : 'Friend #3', age : 'Age 16'},
        {name : 'Friend #4', age : 'Age 23'},
        {name : 'Friend #5', age : 'Age 32'},
        {name : 'Friend #6', age : 'Age 76'},
        {name : 'Friend #7', age : 'Age 12'},
        {name : 'Friend #8', age : 'Age 32'},
        {name : 'Friend #9', age : 'Age 35'},
        {name : 'Friend #10', age : 'Age 63'},
    ]


    return(
        <FlatList 
            //horizontal={true}
            showsVerticalScrollIndicator = {false}
            keyExtractor = { (friend) => friend.name}
            data = {friends}  
            renderItem={({item}) => {
                return <Text style={styles.textStyle}>
                     {item.name} - {item.age} 
                </Text>;
            }}    
        />
    ) 
}


const styles = StyleSheet.create ({
    textStyle: {
        marginVertical: 30
        //marginHorizontal: 10
    }
})


export default ListScreen;