import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, useAuth } from './src/auth/context/AuthContext';
import AuthStack from './src/navigation/AuthStack';
import AppStack from './src/navigation/AppStack';
import 'react-native-url-polyfill/auto';
import 'react-native-get-random-values';

function RootNavigation() {
  const { session } = useAuth();

  return session ? <AppStack /> : <AuthStack />;
}

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </AuthProvider>
  );
}
