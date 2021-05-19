import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Mario Castellano</Text>
      <Text>{counter}</Text>
      <Button
        title="Increase"
        onPress={() => setCounter(prevCounter => prevCounter + 1)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
