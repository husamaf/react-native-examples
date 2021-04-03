import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FunctionalComponentExample from './screens/FunctionalComponentExample';
import ClassComponentExample from './screens/ClassComponentExample';
import PropsDependencyExample from './screens/PropsDependencyExample';
import PropsExample from './screens/PropsExample';
import RefExample from './screens/RefExample';
import GHExample1 from './screens/GHExample1';

export default function App() {
  return (
    <View style={styles.container}>
      <GHExample1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
