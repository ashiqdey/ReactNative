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
  FlatList,
} from 'react-native';

function GridLayout(): JSX.Element {
  const users = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  const renderItem = n => {
    return (
      <View
        key={n}
        style={{
          width: '33%',
          padding: 10,
        }}>
        <Text
          style={{
            backgroundColor: '#fff',
            padding: 30,
            textAlign: 'center',
            borderRadius: 10,
          }}>
          {n}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={{
        marginTop: 20,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
      {users.map(renderItem)}
    </View>
  );
}

export default GridLayout;
