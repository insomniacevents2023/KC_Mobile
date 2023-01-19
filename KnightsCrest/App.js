import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './components/Login';


const Stack = createStackNavigator();

function App() {
  return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
</Stack.Navigator></NavigationContainer>)
}

export default App;