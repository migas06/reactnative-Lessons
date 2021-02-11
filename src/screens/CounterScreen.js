import React, { useReducer } from 'react'
import { View, Button, StyleSheet, Text } from 'react-native'

const reducer = (state, action) => {

    return action.type === 'increment'
    ? 
    { ...state, counter: state.counter + action.payload } 
    :
    { ...state, counter: state.counter - action.payload }
    
}


const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 })

    return (
        <View>
            <Button
                title='increment'
                onPress={() => {
                    dispatch({ type:'increment', payload: 1 })
                }}
            />

            <Button
                title='Decrease'
                onPress={() => dispatch({ type:'decrement', payload: 1 })}
            />

            <Text>Current Count: {state.counter}</Text>
        </View>
    );

}

const styles = StyleSheet.create({

});

export default CounterScreen;