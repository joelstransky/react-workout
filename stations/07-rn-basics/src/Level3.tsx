import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';

export default function Level3() {
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    setPressed(!pressed);
    // 🧠 WORKOUT START: Use Alert.alert on native, or window.alert on web
    // Note: react-native-web polyfills Alert.alert
    Alert.alert('Pressed!', 'You toggled the state.');
  };

  return (
    <View style={styles.container}>
      <h2>Level 3: Interaction</h2>
      {/* 🏃‍♂️ WORKOUT START: Create a TouchableOpacity that toggles 'pressed' state */}
      <TouchableOpacity 
        onPress={handlePress} 
        style={[styles.button, pressed && styles.pressedButton]}
        testID="toggle-button"
      >
        <Text style={styles.buttonText}>
          {pressed ? 'ON' : 'OFF'}
        </Text>
      </TouchableOpacity>
      
      <Text style={styles.status} testID="status-text">
        Status: {pressed ? 'Active' : 'Inactive'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    width: 200,
    alignItems: 'center',
  },
  pressedButton: {
    backgroundColor: '#4CD964',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  status: {
    marginTop: 20,
    fontSize: 18,
  }
});
