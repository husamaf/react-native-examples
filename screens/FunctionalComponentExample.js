import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const FunctionalComponentExample = (props) => {
  const [toggleState, setToggleState] = useState(false);

  let a = 0;
  let b = useRef(0);

  useEffect(() => {
    console.log("I just rendered!")
  })

  const buttonHandler = () => {
    a += 1
    b.current += 1
    setToggleState((prevState) => !prevState)
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Testing variables with/without useRef in Functional Component</Text>
      <Text>{`This is a: ${a}`}</Text>
      <Text>{`This is b: ${b.current}`}</Text>
      <Text>{`This is toggleState: ${toggleState}`}</Text>
      <View style={styles.buttonContainer}>
        <Button  title={'Press Me!'} onPress={buttonHandler}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {marginBottom: 80, textAlign: 'center', fontWeight: 'bold'},
  buttonContainer: {marginTop: 80}
});

export default FunctionalComponentExample;
