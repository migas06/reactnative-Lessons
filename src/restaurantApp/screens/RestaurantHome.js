import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchComponent from '../components/SearchComponent';
import ResultsList from '../components/ResultsList'
import useSearchResults from '../hooks/useSearchResults';

const RestaurantHome = () => {

    const [filterText, setFilterText] = useState("");
    const [searchAPI, results, errorMsg] = useSearchResults();

    const filterResultsByPrice = (price) => {
        //price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    }

    return (

        <View style={styles.backgroundStyle}>
            <SearchComponent
                filterText={filterText}
                setFilterText={text => setFilterText(text)}
                onSubmit={() => searchAPI(filterText)}
            />

            {errorMsg ? <Text style={styles.errorMsgStyle}>{errorMsg}</Text> : null}

            <ScrollView
                showsVerticalScrollIndicator={false}>

                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#fff",
        flex: 1,
        padding: 15
    },

    errorMsgStyle: {
        color: 'firebrick'
    }
});

export default RestaurantHome;