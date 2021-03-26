import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class ClassComponent extends React.Component{

  constructor(props) {
    super(props);
    this.state = {toggleState: false};
    this.a = 0;
  }

  b = 0;

  componentDidMount() {
    console.log("This is 1st render!");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("I just re-rendered!");
  }

  buttonHandler = () => {
    this.a += 1
    this.b += 1
    this.setState((prevState) => {
      return {toggleState: !prevState.toggleState}
    })
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>This is a Class Component</Text>
        <Text>{`This is a: ${this.a}`}</Text>
        <Text>{`This is b: ${this.b}`}</Text>
        <Text>{`This is toggleState: ${this.state.toggleState}`}</Text>
        <View style={styles.buttonContainer}>
          <Button title={'Press Me!'} onPress={this.buttonHandler}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  title: {marginBottom: 80, fontWeight: 'bold'},
  buttonContainer: {marginTop: 80}
});

export default ClassComponent;
