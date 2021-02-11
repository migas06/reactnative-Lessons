import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const EditTextScreen = () => {

    const [text, setText] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View>
            <Text>Enter name: </Text>
            <TextInput
                autoCapitalize="words"
                style={styles.input}
                onChangeText={(textTyped) => {
                    setText(textTyped);
                }
                } />
            <Text>Your name is {text}</Text>

            <View style={{ height: 10 }} />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                onChangeText = { (password) => {
                    setPassword(password)
                }} />

                {password.length > 5 ? <Text>Nice password</Text> : <Text>Password need to be greater than 5</Text>}
        </View>
    );

}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        fontSize: 12,
        borderColor: 'white',
        borderWidth: 1
    }
});

export default EditTextScreen;