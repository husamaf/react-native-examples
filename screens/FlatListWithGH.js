import React, { useEffect, useRef, useImperativeHandle } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { PanGestureHandler, FlatList, State } from 'react-native-gesture-handler';

const myData = [
  { key: '1', title: 'This is 1' },
  { key: '2', title: 'This is 2' },
  { key: '3', title: 'This is 3' },
  { key: '4', title: 'This is 4' },
  { key: '5', title: 'This is 5' },
  { key: '6', title: 'This is 6' },
  { key: '7', title: 'This is 7' },
  { key: '8', title: 'This is 8' },
  { key: '9', title: 'This is 9' },
  { key: '10', title: 'This is 10' }
];

const ListItem = React.forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    print: () => console.log(`Hello, World! (${props.title})`)
  }));

  const stateChangeHandler = event => {
    if (event.nativeEvent.state === State.UNDETERMINED) {
      console.log(`${props.title} UNDETERMINED`);
    } else if (event.nativeEvent.state === State.FAILED) {
      console.log(`${props.title} FAILED`);
    } else if (event.nativeEvent.state === State.BEGAN) {
      console.log(`${props.title} BEGAN`);
    } else if (event.nativeEvent.state === State.CANCELLED) {
      console.log(`${props.title} CANCELLED`);
    } else if (event.nativeEvent.state === State.ACTIVE) {
      console.log(`${props.title} ACTIVE`);
    } else if (event.nativeEvent.state === State.END) {
      console.log(`${props.title} END`);
    }
  };

  return (
    <PanGestureHandler
      ref={ref}
      activeOffsetY={1000}
      // simultaneousHandlers={props.parentRef}
      onHandlerStateChange={stateChangeHandler}
    >
      <View style={styles.listItem}>
        <Text style={{ textAlign: 'center' }}>{props.title}</Text>
      </View>
    </PanGestureHandler>
  );
});

const FlatListWithGH = props => {
  const flatListRef = useRef();
  const childrenRefs = useRef({});
  myData.forEach(item => {
    childrenRefs.current[item.key] = React.createRef();
  });

  useEffect(() => {
    childrenRefs.current['1'].current.print();
  });

  const stateChangeHandler = event => {
    if (event.nativeEvent.state === State.UNDETERMINED) {
      console.log(`outer UNDETERMINED`);
    } else if (event.nativeEvent.state === State.FAILED) {
      console.log(`outer FAILED`);
    } else if (event.nativeEvent.state === State.BEGAN) {
      console.log(`outer BEGAN`);
    } else if (event.nativeEvent.state === State.CANCELLED) {
      console.log(`outer CANCELLED`);
    } else if (event.nativeEvent.state === State.ACTIVE) {
      console.log(`outer ACTIVE`);
    } else if (event.nativeEvent.state === State.END) {
      console.log(`outer END`);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Testing with Gesture Handlers</Text>
      <FlatList
        onHandlerStateChange={stateChangeHandler}
        ref={flatListRef}
        // simultaneousHandlers={myData.map(item => childrenRefs.current[item.key])}
        style={styles.flatList}
        data={myData}
        renderItem={({ item }) => (
          <ListItem
            ref={childrenRefs.current[item.key]}
            parentRef={flatListRef}
            title={item.title}
          />
        )}
      />
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
        <Text>{'- Placeholder Text\n- Placeholder Text.\n- Placeholder Text.'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { marginBottom: 40, fontWeight: 'bold' },
  flatList: { flexGrow: 0, height: 300, marginBottom: 100 },
  listItem: { width: 100, borderWidth: 2, margin: 5, padding: 5 },
  conclusions: { fontWeight: 'bold' }
});

export default FlatListWithGH;
