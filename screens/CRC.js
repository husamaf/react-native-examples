import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

const HellWorld = props => {
  return (
    <View
      style={styles.listItem}
      // onLayout={({
      //   nativeEvent: {
      //     layout: { x, y }
      //   }
      // }) => console.log(`x is ${x}, y is ${y}`)}
    >
      <Text style={{ textAlign: 'center' }}>{props.title}</Text>
    </View>
  );
};

const renderItemHandler = renderProps => {
  if (renderProps.index === 0) {
    console.log('########### renderItem props ###########');
    Object.keys(renderProps).forEach(i => {
      console.log(i);
    });
  }
  return <HellWorld title={renderProps.item.title} />;
};

const cellRendererComponentHandler = cellProps => {
  if (cellProps.index === 0) {
    console.log('###########     CRC props    ###########');
    Object.keys(cellProps).forEach(i => {
      console.log(i);
    });
  }
  return <HellWorld title={cellProps.item.title} />;
};

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

const CRC = props => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>renderItem vs. cellRendererComponent</Text>
      <FlatList
        style={styles.flatList}
        data={listItems}
        renderItem={renderItemHandler}
        CellRendererComponent={cellRendererComponentHandler}
      />
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
        <Text>
          {'- "CellRendererComponent" wraps "renderItem" (See "children" prop in CellRendererComponent).\n\n' +
            '- "CellRendererComponent" gives more fine-tuning control than "renderItem" (i.e. exposes more props).\n\n' +
            '- Using "onLayout" for a list item only works with "CellRendererComponent, because "renderItem" always wraps the item with an empty "View".\n\n' +
            '- (I think) If we choose to use "CellRendererComponent", then "renderItem" is redundant.'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  title: { marginBottom: 40, fontWeight: 'bold' },
  flatList: { flexGrow: 0, height: 300, width: 150, marginBottom: 100 },
  listItem: {
    width: 100,
    borderWidth: 2,
    padding: 5,
    margin: 5,
    backgroundColor: 'yellow'
  },
  conclusions: { fontWeight: 'bold' }
});

export default CRC;
