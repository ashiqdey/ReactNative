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

function App(): JSX.Element {
  const [clicked, setClicked] = useState('');
  const [value, setValue] = useState('');
  // const isDarkMode = useColorScheme() === 'dark';

  const callfunc = () => {
    setClicked(value);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.text}>Hello ashiq {clicked}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={value}
        onChangeText={text => setValue(text)}
      />
      <Text style={styles.button} onPress={callfunc}>
        Submit
      </Text>
    </View>
  );
}

export default App;
