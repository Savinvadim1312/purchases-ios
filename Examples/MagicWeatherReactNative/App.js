/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import Purchases from 'react-native-purchases';
import Router from './src/navigation/Router';
import { API_KEY } from './src/constants';

const App: () => React$Node = () => {
  useEffect(() => {
    Purchases.setDebugLogsEnabled(true);
    Purchases.setup(API_KEY);
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>
  );
};

export default App;
