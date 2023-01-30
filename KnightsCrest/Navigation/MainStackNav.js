import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../screens/Login';
import DrawerNav from './DrawerNav';

const Stack = createStackNavigator();
export default function MainStack() {
    return(
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name='Home' component={DrawerNav}/>
          </Stack.Navigator>
          );


}