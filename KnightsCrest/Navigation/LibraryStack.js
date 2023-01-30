import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LibraryMain from '../Screens/LibraryScreens/LibraryMain';

const Stack = createStackNavigator();
export default function LibraryStack() {
    return(
          <Stack.Navigator>
            <Stack.Screen name="Library" component={LibraryMain} />
          </Stack.Navigator>
          );
}