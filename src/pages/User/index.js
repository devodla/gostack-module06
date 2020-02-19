import React from 'react';
import { Button, View, Text } from 'react-native';

// import { Container } from './styles';

export default function User({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Screen</Text>
      <Button title="Go To Main" onPress={() => navigation.navigate('Main')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
