import React from 'react';
import { View, Text, Platform } from 'react-native';
import { Title } from '@monorepo/components';

const App = () => {
  return (
    <View>
      <Title />
      <Text>Platform: {Platform.OS}</Text>
    </View>
  );
};

export default App;
