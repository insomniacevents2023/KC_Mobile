import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import HomeScreen from "../Screens/LoginStackScreen/HomeScreen";
import KnightsCashStack from "./KnightsCashStack.js";
import LibraryStack from "./LibraryStack";

// For testing
import LibraryFees from "../Screens/LibraryStackScreens/LibraryFees";
import LibraryLoans from "../Screens/LibraryStackScreens/LibraryLoans";
import LibraryReq from "../Screens/LibraryStackScreens/LibraryReq";



export default function BottomNav(){
  return (
    <Tab.Navigator screenOptions = {{
      headerShown: false}}>
     <Tab.Screen name="Home" component={HomeScreen} options = {{headerStyle: {
      backgroundColor: '#FFC904', position: "absolute"
     }}}/>
     <Tab.Screen name ="KnightsCash" component={KnightsCashStack}/>
     <Tab.Screen name="Library" component={LibraryStack}/>
    </Tab.Navigator>
  );
};
