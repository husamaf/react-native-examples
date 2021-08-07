import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import FunctionalComponent from './screens/FunctionalComponent';
import ClassComponent from './screens/ClassComponent';
import PropsAsDependency from './screens/PropsAsDependency';
import Props from './screens/Props';
import Refs from './screens/Refs';
import NestedFlatLists from './screens/NestedFlatLists';
import ActiveOffset from './screens/ActiveOffset';
import CRC from './screens/CRC';
import Animations from './screens/Animations';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Animations />
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
