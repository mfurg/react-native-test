import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './HomeScreen';
import { DetailsScreen } from './DetailsScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  );
}