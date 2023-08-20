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
} from 'react-native';
import { styles } from './styles';

function App(): JSX.Element {
  const [clicked, setClicked] = useState(false);
  // const isDarkMode = useColorScheme() === 'dark';

  const callfunc = () => {
    setClicked(!clicked);
  };

  return (
    <View style={{ backgroundColor: 'pink', padding: 20 }}>
      <Text style={styles.text}>
        Hello ashiq {clicked ? 'Clicked' : 'not clciked'}
      </Text>
      <Text style={styles.button} onPress={callfunc}>
        Submit
      </Text>
    </View>
  );
}

export default App;
