import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {COLORS} from '../assets/colors';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.primary} />
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen component={AppStack} name="AppStack" />
        <Stack.Screen component={AuthStack} name="AuthStack" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
