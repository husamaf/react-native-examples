import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const { cond, Value } = Animated;

const Item = props => {
  return (
    <View style={styles.item}>
      <Text style={{ textAlign: 'center' }}>Animated View</Text>
    </View>
  );
};

const Animations = props => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Animations</Text>
      <Item />
      <TouchableOpacity style={styles.button} onPress={() => console.log('HELLO')}>
        <Text>Press Me!</Text>
      </TouchableOpacity>
      <View style={styles.conclusions}>
        <Text style={styles.conclusionsText}>Conclusions:</Text>
        <Text>Add text here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, alignItems: 'center' },
  title: { margin: 50, fontWeight: 'bold' },
  item: {
    width: 100,
    borderWidth: 2,
    margin: 50,
    padding: 5,
    backgroundColor: 'yellow'
  },
  button: { borderRadius: 20, margin: 50, padding: 10, backgroundColor: 'orange' },
  conclusions: { margin: 50 },
  conclusionsText: { fontWeight: 'bold' }
});

export default Animations;
