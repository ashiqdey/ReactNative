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

function ArrayRender(): JSX.Element {
  const [selectedId, setSelectedId] = useState(null);

  const users = [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
    { name: 'John Smith' },
    { name: 'Jane Smith' },
    { name: 'Alex Doe' },
    { name: 'Mohan Doe' },
    { name: 'Nick Smith' },
    { name: 'mike Smith' },
  ];

  const renderItem = ({ name }) => {
    return (
      <Text
        key={name}
        style={{
          padding: 20,
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
          backgroundColor: selectedId === name ? '#ddd' : '#fff',
        }}
        onPress={() => setSelectedId(name)}>
        {name}
      </Text>
    );
  };

  return (
    <View
      style={{
        marginTop: 20,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
        height: 200,
      }}>
      <ScrollView>{users.map(renderItem)}</ScrollView>
    </View>
  );
}

export default ArrayRender;
