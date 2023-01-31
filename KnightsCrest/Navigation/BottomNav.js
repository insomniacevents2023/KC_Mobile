import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import HomeScreen from "../Screens/LoginStackScreen/HomeScreen";
import KnightsCashStack from "./KnightsCashStack.js";
import LibraryStack from "./LibraryStack";

// For testing
import LibraryLoans from "../Screens/LibraryStackScreens/LibraryLoans";



export default function BottomNav(){
  return (
    <Tab.Navigator>
     <Tab.Screen name="Home" component={HomeScreen} />
     <Tab.Screen name ="KnightsCash" component={KnightsCashStack}/>
     <Tab.Screen name="Library" component={LibraryLoans}/>
    </Tab.Navigator>
  );
};
