import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FunctionalComponentExample from './screens/FunctionalComponentExample';
import ClassComponentExample from './screens/ClassComponentExample';
import PropsDependencyExample from './screens/PropsDependencyExample';
import PropsExample from './screens/PropsExample';
import RefExample from './screens/RefExample';
import FlatListWithGHExample from './screens/FlatListWithGHExample';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListWithGHExample />
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
