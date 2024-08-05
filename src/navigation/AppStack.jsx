import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ClientHome from '../screens/ClientHome';
import ChatPage from '../screens/ChatPage';
import ChatList from '../screens/ChatList';
import TaskCreate from '../screens/TaskCreate';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName=""
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ClientHome" component={ClientHome} />
      <Stack.Screen name="ChatPage" component={ChatPage} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="TaskCreate" component={TaskCreate} />
    </Stack.Navigator>
  );
}
