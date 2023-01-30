import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import HomeScreen from "../Screens/LoginStackScreen/HomeScreen";
import LibraryStack from "./LibraryStack";
import KnightsCashStack from "./KnightsCashStack.js";



export default function BottomNav(){
  return (
    <Tab.Navigator>
     <Tab.Screen name="Home" component={HomeScreen} />
     <Tab.Screen name ="KnightsCash" component={KnightsCashStack}/>
     <Tab.Screen name="Library" component={LibraryStack}/>
    </Tab.Navigator>
  );
};
