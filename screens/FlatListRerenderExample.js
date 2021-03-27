// TODO: *** Under Construction ***
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, View, Text, Button, FlatList} from 'react-native';

const myData = [
  {key: "1", title: "This is 1"},
  {key: "2", title: "This is 2"},
  {key: "3", title: "This is 3"},
  {key: "4", title: "This is 4"},
  {key: "5", title: "This is 5"},
  {key: "6", title: "This is 6"},
  {key: "7", title: "This is 7"},
  {key: "8", title: "This is 8"},
  {key: "9", title: "This is 9"},
  {key: "10", title: "This is 10"},
]


const MyFlatList = props => {

  useEffect(() => {
    console.log("MyFlatList just rendered!")
  })

  return <FlatList style={props.style} data={props.data} renderItem={props.renderItem}/>
}



const FlatListRerenderExample = (props) => {
  const [toggleState, setToggleState] = useState(false);

  const buttonHandler = () => {
    setToggleState((prevState) => !prevState)
  }

  const renderItem = ({item}) => {
    return (
      <View style={{borderWidth: 2, margin: 5, padding:5}}>
        <Text>{item.title}</Text>
      </View>
    )
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Testing with a Functional Component</Text>
      <MyFlatList style={styles.flatList} data={myData} renderItem={renderItem} />
      <View style={styles.buttonContainer}>
        <Button title={'Increment & Update!'} onPress={buttonHandler}/>
      </View>
      <View>
        <Text style={styles.conclusions}>Conclusions:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center'},
  title: {marginBottom: 20, fontWeight: 'bold'},
  flatList: {flexGrow:0, height: 350},
  buttonContainer: {height: 150, margin: 40, justifyContent: 'space-between'},
  conclusions: {fontWeight: 'bold'}
});

export default FlatListRerenderExample;
