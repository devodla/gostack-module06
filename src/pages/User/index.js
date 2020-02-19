import React from 'react';
import { Button, Text } from 'react-native';

import { Container } from './styles';

export default function User({ navigation }) {
  return (
    <Container>
      <Text>User Screen</Text>
      <Button title="Go To Main" onPress={() => navigation.navigate('Main')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </Container>
  );
}
