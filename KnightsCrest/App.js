
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './Navigation/LoginStack';

function App() {
  return(
  <NavigationContainer>
    <LoginStack/>
  </NavigationContainer>)
}

export default App;