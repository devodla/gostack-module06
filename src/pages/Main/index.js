import React from 'react';
import { Button, View, Text } from 'react-native';

// import { Container } from './styles';

export default function Main({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Screen</Text>
      <Button title="Go To User" onPress={() => navigation.navigate('User')} />
    </View>
  );
}
