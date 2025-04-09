import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './src/navigation/Stack'


export default props => (
  <SafeAreaView style={{flex: 1}}> 
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  </SafeAreaView>
)
