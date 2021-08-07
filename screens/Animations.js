import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

const Item = props => {
  return (
    <View style={styles.item}>
      <Text style={{ textAlign: 'center' }}>This is an Item</Text>
    </View>
  );
};

const Animations = props => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Animations</Text>
      <Item />
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
        <Text>Add text here</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, alignItems: 'center' },
  title: { marginBottom: 100, fontWeight: 'bold' },
  item: {
    width: 100,
    borderWidth: 2,
    marginBottom: 100,
    padding: 5,
    backgroundColor: 'yellow'
  },
  conclusions: { fontWeight: 'bold' }
});

export default Animations;
