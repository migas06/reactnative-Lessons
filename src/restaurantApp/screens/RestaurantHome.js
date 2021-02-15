import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchComponent from '../components/SearchComponent';

const ERROR_MSG = "Something went wrong";

const RestaurantHome = () => {
    const [filterText, setFilterText] = useState("");
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    const errorHandler = () => {
        setErrorMsg(ERROR_MSG);
        setResults([]);
    }

    const searchAPI = (location) => {

        setErrorMsg("");

        fetch(`https://api.yelp.com/v3/businesses/search?location=${location}`,
            {
                headers: new Headers({
                    'Authorization': 'Bearer ikf5JI7oPz_CGvcsRiYk7U6bsV0K5YL9bZWGNCwLPgEBrVuLSwfRReuUABHgwrCeK-woO9Tm4EQY53j1c-zAfu9HNOwNqJhJR0E3CwXdFmyPeXyks7YNrokBSs4qYHYx'
                })
            })
            .then(res => res.json())
            .then(
                (apiResponse) => {
                    (apiResponse.businesses != null) ? setResults(apiResponse.businesses) : errorHandler();
                },
            )
            .catch = () => {
                setErrorMsg(ERROR_MSG);
            };
    }

    return (

        <View style={styles.backgroundStyle}>
            <SearchComponent
                filterText={filterText}
                setFilterText={text => setFilterText(text)}
                onSubmit={() => searchAPI(filterText)}
            />

            {errorMsg ? <Text style={styles.errorMsgStyle}>{errorMsg}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#fff",
        flex: 1,
        padding: 16
    },

    errorMsgStyle: {
        color: 'firebrick'
    }
});

export default RestaurantHome;