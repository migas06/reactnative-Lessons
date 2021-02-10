import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from 'react-native';
import ColorManagementAdapter from "../components/ColorManagementAdapter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    //state === { red: number, green: number, blue: number}
    //action === {colorToChange: 'red' || 'green' || 'blue', amount 15 || -15}

    switch (action.colorToChange) {
        //by the convention
        //case 'change_red': then (...) action.payload
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquareColorScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;
    return (
        <View>
            <ColorManagementAdapter color='Red'
                                            // by the convention 
                                            //dispatch({ type: 'change_red', payload COLOR_INCREMENT})
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })} />

            <ColorManagementAdapter
                color='Green'
                                            // by the convention 
                                            //dispatch({ type: 'change_green', payload COLOR_INCREMENT})
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })} />

            <ColorManagementAdapter
                color='Blue'
                                            // by the convention 
                                            //dispatch({ type: 'change_blue', payload COLOR_INCREMENT})
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
            />

            <View style={{ height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
            />
        </View>
    );

}


export default SquareColorScreen;