import HomeScreen from "./DrawerScreens/HomeScreen";


export default function Home({navigation, route})
{
    const {fName, lName, kCashNum, libNumber, UCFID, caste, expDate} = route.params
    return (
    <HomeScreen 
    fName= {fName}
    lName = {lName} 
    kCashNum ={kCashNum} 
    libNumber = {libNumber} 
    UCFID = {UCFID}
    caste = {caste}
    expDate = {expDate}
    ></HomeScreen>)
}