import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList, } from '@react-navigation/drawer';
import MyHelp from "../screens/DrawerScreens/MyHelp"
import PersonalInfo from "../screens/DrawerScreens/PersonalInfo"
import MySettings from "../screens/DrawerScreens/MySettings"


const Drawer = createDrawerNavigator();
export default function Drawer() {
    return (
    <Drawer.Navigator>
        <Drawer.Screen name="Help" component={MyHelp} />
        <Drawer.Screen name="Personal Info" component={PersonalInfo} />
        <Drawer.Screen name="Settings" component={MySettings} />
  </Drawer.Navigator>)
}