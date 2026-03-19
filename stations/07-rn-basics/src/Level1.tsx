import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// 🧠 WORKOUT START
const Level1 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Station 07</Text>
      <Text style={styles.subtitle}>React Native Basics</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
  },
});

export default Level1;
