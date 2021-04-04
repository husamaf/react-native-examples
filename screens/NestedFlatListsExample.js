import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { FlatList, State } from 'react-native-gesture-handler';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <Text style={{ textAlign: 'center' }}>{props.title}</Text>
    </View>
  );
};

const InnerList = props => {
  const listItems = [
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

  const stateChangeHandler = event => {
    if (event.nativeEvent.state === State.UNDETERMINED) {
      console.log(`${props.listId} UNDETERMINED`);
    } else if (event.nativeEvent.state === State.FAILED) {
      console.log(`${props.listId} FAILED`);
    } else if (event.nativeEvent.state === State.BEGAN) {
      console.log(`${props.listId} BEGAN`);
    } else if (event.nativeEvent.state === State.CANCELLED) {
      console.log(`${props.listId} CANCELLED`);
    } else if (event.nativeEvent.state === State.ACTIVE) {
      console.log(`${props.listId} ACTIVE`);
    } else if (event.nativeEvent.state === State.END) {
      console.log(`${props.listId} END`);
    }
  };

  return (
    <FlatList
      onHandlerStateChange={stateChangeHandler}
      style={styles.flatList}
      data={listItems}
      renderItem={({ item }) => <ListItem title={item.title} />}
    />
  );
};

const OuterList = props => {
  const verticalLists = [{ key: 'list1' }, { key: 'list2' }, { key: 'list3' }];

  const stateChangeHandler = event => {
    if (event.nativeEvent.state === State.UNDETERMINED) {
      console.log(`${props.listId} UNDETERMINED`);
    } else if (event.nativeEvent.state === State.FAILED) {
      console.log(`${props.listId} FAILED`);
    } else if (event.nativeEvent.state === State.BEGAN) {
      console.log(`${props.listId} BEGAN`);
    } else if (event.nativeEvent.state === State.CANCELLED) {
      console.log(`${props.listId} CANCELLED`);
    } else if (event.nativeEvent.state === State.ACTIVE) {
      console.log(`${props.listId} ACTIVE`);
    } else if (event.nativeEvent.state === State.END) {
      console.log(`${props.listId} END`);
    }
  };

  return (
    <FlatList
      onHandlerStateChange={stateChangeHandler}
      style={styles.flatList}
      data={verticalLists}
      horizontal
      // pagingEnabled
      renderItem={({ item }) => <InnerList listId={item.key} />}
    />
  );
};

const NestedFlatListsExample = props => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Testing with Gesture Handlers</Text>
      <OuterList listId='OuterList' />
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
        <Text>
          {'- Nested FlatLists can co-exist WITHOUT needing "simultaneousHandlers".\n' +
            '- When pressed, both inner and outer FlatList are set to "BEGAN".\n' +
            '- Inner FlatList always triggers first.\n\n' +
            '- If both lists are vertical:\n' +
            '   - Vertical swiping causes the child to become "ACTIVE" and cancel the parent.\n' +
            '   - Horizontal swiping does nothing.\n\n' +
            '- If outerList is horizontal:\n' +
            '   - Vertical swiping causes the child to become "ACTIVE" and cancel the parent.\n' +
            '   - Horizontal swiping causes the parent to become "ACTIVE" and cancel the child.\n\n' +
            '- "onHandlerStateChange" is only exposed in GH FlatLists (NOT regular FlatLists).'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { marginBottom: 40, fontWeight: 'bold' },
  flatList: { flexGrow: 0, height: 300, width: 150, marginBottom: 100 },
  listItem: { width: 100, borderWidth: 2, margin: 5, padding: 5 },
  conclusions: { fontWeight: 'bold' }
});

export default NestedFlatListsExample;
