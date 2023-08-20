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

function Flatlists(): JSX.Element {
  const [selectedId, setSelectedId] = useState(null);

  const users = [
    { name: 'John Doe' },
    { name: 'Jane Doe' },
    { name: 'John Smith' },
    { name: 'Jane Smith' },
  ];

  const renderItem = ({ item }) => {
    return (
      <Text
        style={{
          padding: 10,
          borderBottomColor: '#ddd',
          borderBottomWidth: 1,
          backgroundColor: selectedId === item.name ? '#ddd' : '#fff',
        }}
        onPress={() => setSelectedId(item.name)}>
        {item.name}
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
      }}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        extraData={selectedId}
      />
    </View>
  );
}

export default Flatlists;
