/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
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

function App(): JSX.Element {
  const [clicked, setClicked] = useState(false);
  // const isDarkMode = useColorScheme() === 'dark';

  const callfunc = () => {
    setClicked(!clicked);
  };

  return (
    <View style={{backgroundColor: 'pink'}}>
      <Text style={styles.text}>
        Hello {clicked ? 'Clicked' : 'not clciked'}
      </Text>
      <Button title="Submit" onPress={callfunc} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'pink',
    color: 'blue',
  },
});

export default App;
