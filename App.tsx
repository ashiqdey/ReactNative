/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  Text,
  View,
  Button,
  TextInput,
} from 'react-native';
import { styles } from './styles';
import Inputs from './components/Inputs';
import Flatlists from './components/Flatlists';
import ArrayRender from './components/ArrayRender';

function App(): JSX.Element {
  return (
    <View style={{ padding: 20 }}>
      <Text>hello</Text>
      <Inputs />
      <Flatlists />
      {/* <ScrollView> */}
      <ArrayRender />
      {/* </ScrollView> */}
    </View>
  );
}

export default App;
