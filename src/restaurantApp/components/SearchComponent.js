import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchComponent = ({ filterText, setFilterText, onSubmit }) => {

    return (

        <View style={styles.searchBarStyle}>
            <Feather name="search"
                style={styles.iconStyles} />
            <TextInput
                autoCapitalize="none"
                style={styles.textInput}
                placeholder="Search"
                value={filterText}
                onChangeText={text => { setFilterText(text) }}
                onEndEditing={()=> { onSubmit() }}
            />
        </View>

    );

}

const styles = StyleSheet.create({

    searchBarStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        flexDirection: "row",
        marginBottom: 5
    },

    textInput: {
        marginLeft: 10,
        flex: 1,
        fontSize: 18
    },

    iconStyles: {
        fontSize: 35,
        alignSelf: 'center',
        margin: 15
    }

});

export default SearchComponent;