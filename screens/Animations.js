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

const outOfScreenX = 250;
const outOfScreenY = 250;

const Animations = props => {
  const [toggle, setToggle] = useState(false);
  const initialX = useRef(new Value(200)).current;
  const initialY = useRef(new Value(200)).current;
  const [finalX, setFinalX] = useState(0);
  const [finalY, setFinalY] = useState(0);
  const transition = useTimingTransition(toggle, {
    easing: Easing.inOut(Easing.ease)
  });
  const translateX = mix(transition, 0, finalX);
  const translateY = mix(transition, 0, finalY);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Animations</Text>
      <Item style={{ ...styles.item, transform: [{ translateY, translateX }] }} />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            setFinalX(-outOfScreenX);
            setFinalY(0);
            setToggle(true);
          }}
        >
          <Animated.View style={styles.button}>
            <Text>Left</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFinalX(0);
            setFinalY(-outOfScreenY);
            setToggle(true);
          }}
        >
          <Animated.View style={styles.button}>
            <Text>Top</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFinalX(outOfScreenX);
            setFinalY(0);
            setToggle(true);
          }}
        >
          <Animated.View style={styles.button}>
            <Text>Right</Text>
          </Animated.View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setFinalX(0);
            setFinalY(outOfScreenY);
            setToggle(true);
          }}
        >
          <Animated.View style={styles.button}>
            <Text>Bottom</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          setToggle(false);
        }}
      >
        <Animated.View style={styles.button}>
          <Text>Undo</Text>
        </Animated.View>
      </TouchableOpacity>
      <View style={styles.conclusions}>
        <Text style={styles.conclusionsText}>Conclusions:</Text>
        <Text>Add text here</Text>
      </View>
      {/* <Animated.Code>
        {() => call([translate], ([state]) => console.log(state))}
      </Animated.Code> */}
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
  buttonsContainer: {
    flexDirection: 'row'
  },
  button: { borderRadius: 20, margin: 8, padding: 10, backgroundColor: 'orange' },
  conclusions: { margin: 50 },
  conclusionsText: { fontWeight: 'bold' }
});

export default Animations;
