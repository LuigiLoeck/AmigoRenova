import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerShown: false,
      }}></Stack.Navigator>
  );
}
