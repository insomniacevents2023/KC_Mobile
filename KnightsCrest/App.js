
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Navigation/MainStackNav';
import BottomNav from './Navigation/BottomNav';

function App() {
  return(
  <NavigationContainer>
    <MainStack></MainStack>
  </NavigationContainer>)
}

export default App;