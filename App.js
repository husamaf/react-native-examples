import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';
import {Provider} from "react-redux";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import FunctionalComponent from './screens/FunctionalComponent';
import ClassComponent from './screens/ClassComponent';
import PropsAsDependency from './screens/PropsAsDependency';
import Props from './screens/Props';
import Refs from './screens/Refs';
import NestedFlatLists from './screens/NestedFlatLists';
import ActiveOffset from './screens/ActiveOffset';
import CRC from './screens/CRC';
import Animations from './screens/Animations';
import state1 from './store/reducers/state1'
import state2 from './store/reducers/state2'
import ReduxBatching from "./screens/ReduxBatching";
import thunk from "redux-thunk";
import {reduxBatch} from "@manaflair/redux-batch";

const rootReducer = combineReducers({
  state1: state1,
  state2: state2
})

export default function App() {
  return (
  <Provider store={createStore(rootReducer, compose(reduxBatch, applyMiddleware(thunk), reduxBatch))}>
    <View style={styles.container}>
      <StatusBar />
      <ReduxBatching />
    </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
