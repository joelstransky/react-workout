import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const USERS = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
  { id: '3', name: 'Charlie' },
];

export default function Level2() {
  return (
    <View style={styles.container}>
      <h2>Level 2: FlatList</h2>
      {/* 🏃‍♂️ WORKOUT START: Render the USERS array using a FlatList */}
      <FlatList
        data={USERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item} testID="user-item">
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  text: {
    fontSize: 18,
  },
});
