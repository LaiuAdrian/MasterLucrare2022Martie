
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './nav/MyStack';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import {store , persistor } from './reducers/store';





export default function  App () {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}> 
          <MyStack />
        </PersistGate> 
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
