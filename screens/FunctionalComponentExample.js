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
      <Text style={styles.title}>Testing with a Functional Component</Text>
      <Text>{`This is a: ${a}`}</Text>
      <Text>{`This is b: ${b.current}`}</Text>
      <Text>{`This is toggleState: ${toggleState}`}</Text>
      <View style={styles.buttonContainer}>
        <Button  title={'Increment & Update!'} onPress={buttonHandler}/>
      </View>
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
        <Text>- "a" is always reset to 0 with every re-render.</Text>
        <Text>- "b" uses "useRef" and so it does not reset to 0 with every re-render.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center'},
  title: {marginBottom: 80, fontWeight: 'bold'},
  buttonContainer: {height: 150, margin: 40, justifyContent: 'space-between'},
  conclusions: {fontWeight: 'bold'}
});

export default FunctionalComponentExample;
