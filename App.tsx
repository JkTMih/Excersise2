//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import LoginScreen1 from './components/LoginPaper';
import CreateNewAccount from './components/CreateNewAccount';
import ForgotMyPassword from './components/ForgotMyPassword';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen1} options={{ headerShown: false }} />
        <Stack.Screen name="CreateNewAccount" component={CreateNewAccount} options={{ headerShown: false }}/>
        <Stack.Screen name="ForgotMyPassword" component={ForgotMyPassword} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
