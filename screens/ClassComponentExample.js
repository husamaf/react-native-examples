import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class ClassComponentExample extends React.Component {
  b = 0;

  constructor(props) {
    super(props);
    this.state = { toggleState: false };
    this.a = 0;
  }

  componentDidMount() {
    console.log('This is 1st render!');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('I just re-rendered!');
  }

  buttonHandler = () => {
    this.a += 1;
    this.b += 1;
    this.setState(prevState => {
      return { toggleState: !prevState.toggleState };
    });
  };

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.title}>Testing with a Class Component</Text>
        <Text>{`This is a: ${this.a}`}</Text>
        <Text>{`This is b: ${this.b}`}</Text>
        <Text>{`This is toggleState: ${this.state.toggleState}`}</Text>
        <View style={styles.buttonContainer}>
          <Button title='Increment & Update!' onPress={this.buttonHandler} />
        </View>
        <View>
          <Text style={styles.conclusions}>Conclusions:</Text>
          <Text>{'- Instance variables in a Class Component (e.g. "a" & "b") are NOT reset to 0 with every re-render.'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { marginBottom: 80, fontWeight: 'bold' },
  buttonContainer: { height: 150, margin: 40, justifyContent: 'space-between' },
  conclusions: { fontWeight: 'bold' }
});

export default ClassComponentExample;
