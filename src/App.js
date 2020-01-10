/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';

import Index from './components/index'
import Navigator from './routes/router'

const App: () => React$Node = () => {
  return (
    <>
    <Navigator />
    </>
  );
};

export default App;
