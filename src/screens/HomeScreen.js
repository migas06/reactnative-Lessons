import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate('Component')}
        title="Go to Components DEMO"
      />

      <Button
        style={styles.button}
        onPress={() => navigation.navigate('List')}
        title='Go to List Demo'
      />

      <Button
        onPress={() => navigation.navigate('ListImages')}
        title='Go to List Images'
      />

      <Button
        onPress={() => navigation.navigate('Counter')}
        title='Go to CounterScreen'
      />

      <Button
        onPress={() => navigation.navigate('Color')}
        title='Go to Color Screen'
      />

    </View>
  );
};

const styles = StyleSheet.create({

  text: {
    fontSize: 30
  },

  button: {
    marginTop: 30,
    fontSize: 70
  }
});

export default HomeScreen;
