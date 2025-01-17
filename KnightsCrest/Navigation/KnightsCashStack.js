import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import KnightsCashMain from '../Screens/KnightsCashScreens/KnightsCashMain';
import KnightsCashAdd from '../Screens/KnightsCashScreens/KnightsCashAdd';

const Stack = createStackNavigator();
export default function KnightsCashStack() {
    return(
          <Stack.Navigator>
            <Stack.Screen name="Main" component= {KnightsCashMain}/>
            <Stack.Screen name="Balance" component= {KnightsCashAdd}/>
            <Stack.Screen name="Add" component={KnightsCashAdd}/>
          </Stack.Navigator>
          );
}