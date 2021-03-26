import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FunctionalComponent from './components/FunctionalComponent'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FunctionalComponent />
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
