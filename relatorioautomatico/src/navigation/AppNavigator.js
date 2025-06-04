import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartReport from '../screens/StartReport';
import CompanyName from '../screens/CompanyName';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="StartReport" component={StartReport} options={{ title: 'Início do Relatório' }} />
        <Stack.Screen name="CompanyName" component={CompanyName} options={{ title: 'Nome da Empresa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}