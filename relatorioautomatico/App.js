import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack'


export default props => (
  <SafeAreaView style={{flex: 1}}> 
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  </SafeAreaView>
)
