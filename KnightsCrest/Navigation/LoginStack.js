import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../Screens/LoginStackScreen/Login';
import BottomNav from './BottomNav';

const Stack = createStackNavigator();
export default function LoginStack() {
    return(
          <Stack.Navigator screenOptions = {{
            headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name = "Home" component={BottomNav}
            options = {{
              headerStyle:{
                backgroundColor: "#FFC904",
                position: "absolute",
                title: "Home"
              }
            }}/>
          </Stack.Navigator>
          );


}