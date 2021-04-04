import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { PanGestureHandler, FlatList, State } from 'react-native-gesture-handler';

const ActiveOffset = props => {
  const ref1 = useRef();

  const stateChangeHandler1 = event => {
    if (event.nativeEvent.state === State.UNDETERMINED) {
      console.log(`GH1 UNDETERMINED`);
    } else if (event.nativeEvent.state === State.FAILED) {
      console.log(`GH1 FAILED`);
    } else if (event.nativeEvent.state === State.BEGAN) {
      console.log(`GH1 BEGAN`);
    } else if (event.nativeEvent.state === State.CANCELLED) {
      console.log(`GH1 CANCELLED`);
    } else if (event.nativeEvent.state === State.ACTIVE) {
      console.log(`GH1 ACTIVE`);
    } else if (event.nativeEvent.state === State.END) {
      console.log(`GH1 END`);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Testing activeOffset</Text>
      <PanGestureHandler
        ref={ref1}
        onHandlerStateChange={stateChangeHandler1}
        activeOffsetX={10}
        // activeOffsetY={10}
      >
        <View style={styles.box} />
      </PanGestureHandler>
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
        <Text>
          {'- "activeOffsetX" sets the range along X-axis where fingers travel without activation.\n' +
            '- "activeOffsetY" sets the range along Y-axis where fingers travel without activation.\n\n' +
            '- If you set activeOffset to 10, then the GH will not activate in the range [-inf, 10].\n' +
            '- If you set activeOffset to -10, then the GH will not activate in the range [-10, +inf].\n\n' +
            '- If you set activeOffset, you must ALWAYS set the offset in BOTH axis otherwise it will default to [-inf, +inf].'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { marginBottom: 40, fontWeight: 'bold' },
  box: { height: 300, width: 300, marginBottom: 100, backgroundColor: 'green' },
  conclusions: { fontWeight: 'bold' }
});

export default ActiveOffset;
