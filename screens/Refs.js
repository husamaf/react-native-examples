import React, { useRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const Child1 = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    print: () => console.log('Hello, World! (Child1 - Functional Component)')
  }));

  return (
    <View>
      <Text>This is Child1 (Functional Component)</Text>
    </View>
  );
});

class Child2 extends React.Component {
  print = () => {
    console.log('Hello, World! (Child2 - Class Component)');
  };

  render() {
    return (
      <View>
        <Text>This is Child2 (Class Component)</Text>
      </View>
    );
  }
}

const Refs = props => {
  const refToChild1 = useRef();
  const refToChild2 = useRef();

  const buttonHandler = () => {
    console.log('Calling Child1 from Parent...');
    refToChild1.current.print();
    console.log('Calling Child2 from Parent...');
    refToChild2.current.print();
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Testing with refs</Text>
      <Child1 ref={refToChild1} />
      <Child2 ref={refToChild2} />
      <View style={styles.buttonContainer}>
        <Button title='Test Refs!' onPress={buttonHandler} color='gray' />
      </View>
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
        <Text>
          {'- By default, "ref" argument is NOT accessible.\n' +
            'There is NO "props.ref", "this.ref", or "this.props.ref".\n\n' +
            '- If you must access "ref" inside a Child (Functional OR Class), you must use ForwardRef(..).\n\n' +
            "- If you only want to call a Child's functions from the Parent:\n" +
            '   - (Class Child) Just pass a reference to "ref" attribute.\n' +
            '   - (Functional Child) Add "ForwardRef(..)" + "useImperativeHandle(..)". Then, pass a reference to "ref" attribute.'}
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

export default Refs;
