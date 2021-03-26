import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Child = props => {
  const {prop1} = props;

  useEffect(() => {
    console.log("This useEffect is for prop1")
  }, [prop1])

  useEffect(() => {
    console.log("This useEffect is for prop2")
  }, [props.prop2])

  return (
    <View>
      <Text>{`prop1: ${prop1}`}</Text>
      <Text>{`prop2: ${props.prop2}`}</Text>
    </View>
  )
}



const PropsDependency = (props) => {
  const [toggleState, setToggleState] = useState(false);

  let prop1 = useRef(0);
  let prop2 = useRef(0);


  const buttonHandler1 = () => {
    prop1.current += 1
  }

  const buttonHandler2 = () => {
    prop2.current += 1
  }

  const buttonHandler3 = () => {
    setToggleState(prevState => !prevState)
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Testing with "props"</Text>
      <Child prop1={prop1.current} prop2={prop2.current}/>
      <View style={styles.buttonContainer}>
        <Button title={'Update prop1!'} onPress={buttonHandler1}/>
        <Button title={'Update prop2!'} onPress={buttonHandler2} color={'red'}/>
        <Button title={'Update State'} onPress={buttonHandler3} color={'gray'}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {marginBottom: 80, fontWeight: 'bold'},
  buttonContainer: {height: 150, marginTop: 80, justifyContent: 'space-between'}
});

export default PropsDependency;
