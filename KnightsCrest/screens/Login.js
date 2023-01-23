import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, TextInput, Linking, Image} from 'react-native';
import { Card } from '@rneui/themed';
import { useState } from 'react';
import { Button } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const users = [{
  fName: "Ima",
  lName: "knight",
  kCashNum: "6009 1921 5309 4359",
  libNumber: "2 21031 52662067",
  UCFID: 123457,
  username: "ik123456",
  password: 'ikpassword'
},]
export default function Login({navigation}) {

    const [accountFocus, setAccountFocus] = useState(false);
    const accountIsFocus = accountFocus ? styles.loginInputFocus : styles.loginInput
    const [PasswordFocus, setPasswordFocus] = useState(false);
    const passwordIsFocus = PasswordFocus ? styles.loginInputFocus : styles.loginInput;

    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Image style = {styles.tabHorizontal} source={require('../assets/images/TabLockup.png')} alt={'University of Central Florida'}/>
          <Card containerStyle = {styles.loginCard}>
              <Text style ={styles.fieldTitle}>Account</Text>
                <TextInput 
                onFocus={()=> {setAccountFocus(true)}}
                style = {accountIsFocus}
                placeholder='Username: NID or DTC-Atlas ID'
                onBlur={() => setAccountFocus(false)}
                ></TextInput>
    
              <Text>Password</Text>
              <TextInput
                  placeholder='Password'
                  secureTextEntry={true}
                  onFocus={()=> setPasswordFocus(true)}
                  onBlur={() => setPasswordFocus(false)}
                  style = {passwordIsFocus}></TextInput>
                    <Button 
                    color={"#000"}
                    title = "Sign On"
                    accessibilityLabel= "Sign On"
                    onPress= {() => navigation.navigate("Home", {fName: users.fName, lName: users.lName, kCash: users.kCashNum, libNumber: users.libNum, id: users.UCFID})}
                    ></Button>
                  </Card>
                  <Text>By signing on, you agree to the terms of the </Text>
                  <Text style = {styles.hyperlink} onPress={() => Linking.openURL('https://policies.ucf.edu/')}>UCF Policies & Procedures.</Text>
                  
                <StatusBar style="auto" />
        </View>
        </SafeAreaProvider>
        )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    fieldTitle: {
      fontFamily: "Gotham-Bold"
    },
    loginInput: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: 15,
      color: "#D4D4D4"
    },
    loginInputFocus: {
      padding: 10,
      borderRadius: 5,
      backgroundColor: '#fff',
      fontSize: 15,
      color: "#000"
    },
    loginCard: {
      backgroundColor: "#FDF1BC",
      shadowColor: "#000000",
      shadowOpacity: 0.8,
      shadowRadius: 2,
      shadowOffset: {
        height: 1,
        width: 1
      }
    },
    hyperlink: {
      color: "blue",
      textDecorationLine: "underline"
    },
    tabHorizontal: {
        width:313,
        height:76  
    }
  });