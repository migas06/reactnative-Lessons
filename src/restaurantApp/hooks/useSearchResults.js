import { useEffect, useState } from 'react';

const ERROR_MSG = "Something went wrong";

const errorHandler = () => {
    setErrorMsg(ERROR_MSG);
    setResults([]);
}

export default () => {

    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    
    const searchAPI = (location) => {

        console.log(location);
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

    useEffect(() => {
        searchAPI("something")
    }, []);

    return [searchAPI, results, errorMsg];

};