import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/DrawerScreens/HomeScreen";
const Drawer = createDrawerNavigator();

export default function DrawerNav(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name= "Home" component={HomeScreen}/>
        </Drawer.Navigator>
    )
}