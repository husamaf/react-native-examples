import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Child = props => {
  useEffect(() => {
    console.log('This useEffect only depends on props.myFunc(..)');
    props.myFunc(); // "props" is implicitly passed to "myFunc()"! (i.e. "props.myFunc.call(props)")
  }, [props.myFunc]);

  return (
    <View>
      <Text>Hi, I am the Child</Text>
      <Text>{`prop1: ${props.prop1}`}</Text>
    </View>
  );
};

const PropsExample = props => {
  const [toggleState, setToggleState] = useState(false);

  const prop1 = useRef(0);
  const myFunc = useCallback(() => {
    console.log('Hi, I am a useCallBack function!');
  }, []);

  const buttonHandler1 = () => {
    prop1.current += 1;
  };

  const buttonHandler2 = () => {
    setToggleState(prevState => !prevState);
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Passing a function from "props" as dependency</Text>
      <Child prop1={prop1.current} myFunc={myFunc} />
      <View style={styles.buttonContainer}>
        <Button title='Increment prop1!' onPress={buttonHandler1} />
        <Button title='Update State' onPress={buttonHandler2} color='gray' />
      </View>
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
        <Text>
          {
            '- This useEffect(..) WORKS AS INTENDED but it will trigger an Eslint error.\n'
          }
        </Text>
        <Text>
          {'- The reason for the error is because the way Javascript functions fundamentally work.\n' +
            'Basically, the full "props" is always implicitly passed as an argument to the function.\n' +
            'So, Eslint throws an error demanding to include the full "props" as a dependency.\n'}
        </Text>
        <Text>
          {'- We can fix the error by destructuring "props" outside useEffect(..).\n'}
        </Text>
        <Text>
          - We can also choose to ignore the error since we never actually use the passed
          "props", so there is no risk.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { marginBottom: 80, fontWeight: 'bold' },
  buttonContainer: { height: 100, margin: 40, justifyContent: 'space-between' },
  conclusions: { fontWeight: 'bold' }
});

export default PropsExample;
