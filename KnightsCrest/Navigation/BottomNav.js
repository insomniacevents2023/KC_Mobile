import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import HomeScreen from "../Screens/LoginStackScreen/HomeScreen";
import KnightsCash from "../Screens/KnightsCashScreens/KnightsCashMain";
import LibraryStack from "./LibraryStack";


export default function BottomNav(){
  return (
    <Tab.Navigator>
     <Tab.Screen name="Home" component={HomeScreen} />
     <Tab.Screen name ="KnightsCash" component={KnightsCash}/>
     <Tab.Screen name="Library" component={LibraryStack}/>
    </Tab.Navigator>
  );
};
