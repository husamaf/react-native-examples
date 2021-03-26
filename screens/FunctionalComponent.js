import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const FunctionalComponent = (props) => {
  const [toggleState, setToggleState] = useState(false);

  let a = 0;
  let b = 0;
  let c = useRef(0)

  useEffect(() => {
    console.log("I just rendered!")
  })

  const buttonHandler = () => {
    a += 1
    b += 1
    c.current += 1
    setToggleState((prevState) => !prevState)
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>This is a Functional Component</Text>
      <Text>{`This is a: ${a}`}</Text>
      <Text>{`This is b: ${b}`}</Text>
      <Text>{`This is c: ${c.current}`}</Text>
      <Text>{`This is toggleState: ${toggleState}`}</Text>
      <View style={styles.buttonContainer}>
        <Button  title={'Press Me!'} onPress={buttonHandler}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {marginBottom: 80, fontWeight: 'bold'},
  buttonContainer: {marginTop: 80}
});

export default FunctionalComponent;
