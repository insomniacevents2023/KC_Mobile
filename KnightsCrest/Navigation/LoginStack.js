import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../Screens/LoginStackScreen/Login';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();
export default function LoginStack() {
    return(
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name = "Home" component={BottomNav}/>
          </Stack.Navigator>
          );


}