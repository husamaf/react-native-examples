import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  TouchableOpacity,
  State,
  TapGestureHandler,
  BaseButton,
  RectButton
} from 'react-native-gesture-handler';
import Animated, { Easing } from 'react-native-reanimated';
import {
  withTimingTransition,
  useClock,
  useValue,
  mix,
  useGestureHandler,
  useTimingTransition
} from 'react-native-redash';

const {
  cond,
  Value,
  Clock,
  startClock,
  stopClock,
  clockRunning,
  timing,
  set,
  event,
  call,
  eq,
  block,
  spring
} = Animated;

const runTiming = () => {
  const myClock = new Clock();
  const state = {
    finished: new Value(0),
    position: new Value(0),
    frameTime: new Value(0),
    time: new Value(0)
  };

  const config = {
    toValue: new Value(100),
    duration: new Value(3000),
    easing: Easing.inOut(Easing.ease)
  };
  return [
    cond(clockRunning(myClock), 0, [
      set(state.finished, 0),
      set(state.position, 0),
      set(state.frameTime, 0),
      set(state.time, 0),
      set(config.duration, 1000),
      set(config.toValue, 100),
      startClock(myClock)
    ]),
    timing(myClock, state, config),
    cond(state.finished, stopClock(myClock)),
    state.position
  ];
};

const Item = ({ style }) => {
  return (
    <Animated.View style={style}>
      <Text style={{ textAlign: 'center' }}>Animated View</Text>
    </Animated.View>
  );
};

const Animations = props => {
  const [position, setPosition] = useState(0);
  const translate = useTimingTransition(position, {
    duration: 2000,
    easing: Easing.inOut(Easing.ease)
  });

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Animations</Text>
      <Item style={{ ...styles.item, transform: [{ translateY: translate }] }} />
      <TouchableOpacity onPress={() => setPosition(prev => prev + 50)}>
        <Animated.View style={styles.button}>
          <Text>Press Me!</Text>
        </Animated.View>
      </TouchableOpacity>
      <View style={styles.conclusions}>
        <Text style={styles.conclusionsText}>Conclusions:</Text>
        <Text>Add text here</Text>
      </View>
      <Animated.Code>
        {() => call([translate], ([state]) => console.log(state))}
      </Animated.Code>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, alignItems: 'center' },
  title: { margin: 50, fontWeight: 'bold' },
  item: {
    width: 100,
    borderWidth: 2,
    margin: 50,
    padding: 5,
    backgroundColor: 'yellow'
  },
  button: { borderRadius: 20, margin: 50, padding: 10, backgroundColor: 'orange' },
  conclusions: { margin: 50 },
  conclusionsText: { fontWeight: 'bold' }
});

export default Animations;
