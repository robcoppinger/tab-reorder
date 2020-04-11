import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../screens/Home';
import {Recipe} from '../screens/Recipe';

const Stack = createStackNavigator();

export const AppNavigator = React.forwardRef((props, ref) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Recipe" component={Recipe} />
    </Stack.Navigator>
  );
});
