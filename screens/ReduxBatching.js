import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import {batch, useDispatch, useSelector} from "react-redux";
import {updateState1AC, updateState1WithDelayAC} from "../store/actions/state1";
import {updateState2AC, updateState2WithDelayAC} from "../store/actions/state2";


const FunctionalComponent = props => {
  const value1 = useSelector(state => state.state1.value);
  const value2 = useSelector(state => state.state2.value);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('I just rendered!');
    console.log(`value1: ${value1}`);
    console.log(`value2: ${value2}`);
  });

  const buttonHandler = () => {
    // batch(() => {
      dispatch(updateState2AC(value2 + 1));
      dispatch(updateState1AC(value1 + 1));
    // })
    // dispatch(
    //   [{type: 'UPDATE_STATE1', payload: {value: value1 + 1}},
    //     {type: 'UPDATE_STATE2', payload: {value: value2 + 1}}
    //   ])
    // dispatch([
    //   updateState2AC(value2 + 1),
    //   updateState1AC(value1 + 1)
    //   ])
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Testing with Redux batching</Text>
      <Text>{`This is state1: ${value1}`}</Text>
      <Text>{`This is state2: ${value2}`}</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update' onPress={buttonHandler} />
      </View>
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
        <Text>
          {'- .\n' +
            '- .'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { marginBottom: 80, fontWeight: 'bold' },
  buttonContainer: { height: 150, margin: 40, justifyContent: 'space-between' },
  conclusions: { fontWeight: 'bold' }
});

export default FunctionalComponent;
