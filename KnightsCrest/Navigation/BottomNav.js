import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import HomeScreen from "../Screens/HomeScreen";
import KnightsCash from "../Screens/KnightsCash";
import Library from "../Screens/Library"


export default function BottomNav(){
  return (
    <Tab.Navigator>
     <Tab.Screen name="Home" component={HomeScreen} />
     <Tab.Screen name ="KnightsCash" component={KnightsCash}/>
     <Tab.Screen name="Library" component={Library}/>
    </Tab.Navigator>
  );
};
