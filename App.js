import * as React from 'react';
import { StyleSheet } from 'react-native';

import MainScreen from './MainScreen';
import WeakScreen from './WeakScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="WeakScreen" component={WeakScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
