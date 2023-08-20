/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={{backgroundColor: 'pink'}}>
      <Text style={{fontWeight: 700, color: 'red'}}>Hello</Text>
    </View>
  );
}

export default App;
