// AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import App from 'C:/Users/hamma/task1/src/App'; // Update the path as needed
import SignUp from 'C:/Users/hamma/task1/src/SignUp'; // Update the path as needed

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={App} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
