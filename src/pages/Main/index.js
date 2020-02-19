import React from 'react';
import { Button, Text } from 'react-native';

import { Container } from './styles';

export default function Main({ navigation }) {
  return (
    <Container>
      <Text>Main Screen</Text>
      <Button title="Go To User" onPress={() => navigation.navigate('User')} />
    </Container>
  );
}
