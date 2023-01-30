import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/DrawerScreens/HomeScreen";
import KnightsCash from "../screens/BottomTabScreens/KnightsCash";
import Library from "../screens/BottomTabScreens/Library";
import Home from "../screens/Home";
import DrawerNav from "./DrawerNav";


const Tab = createBottomTabNavigator();

export default function BottomNav(){
  return (
    <Tab.Navigator>
    </Tab.Navigator>
  );
};
