import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, TextInput, Linking, Image} from 'react-native';
import { Card } from '@rneui/themed';
import { useState } from 'react';
import { Button } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';

let user = {
  fName: "Ima",
  lName: "knight",
  kCashNum: "6009 1921 5309 4359",
  libNumber: "2 21031 52662067",
  UCFID: "123457",
  username: "ik123456",
  password: 'ikpassword',
  caste: 'Student',
  expDate: '2025-03-31T00:00:00'
}
export default function Login({navigation}) {

    const [accountFocus, setAccountFocus] = useState(false);
    const accountIsFocus = accountFocus ? styles.loginInputFocus : styles.loginInput
    const [PasswordFocus, setPasswordFocus] = useState(false);
    const passwordIsFocus = PasswordFocus ? styles.loginInputFocus : styles.loginInput;

    return (
      <SafeAreaProvider style={styles.container}>
        <View >
        <Image style = {styles.tabHorizontal} source={require("../../assets/images/TabLockup.png")} alt={'University of Central Florida'}/>
          <Card containerStyle = {styles.loginCard}>
            <View>
              <Text style ={styles.fieldTitle}>Account</Text>
                <TextInput 
                onChangeText={()=> {setAccountFocus(true)}}
                style = {accountIsFocus}
                placeholder='Username: NID or DTC-Atlas ID'
                ></TextInput>
    
              <Text>Password</Text>
              <TextInput
                  placeholder='Password'
                  secureTextEntry={true}
                  onChangeText={()=> setPasswordFocus(true)}
                  style = {passwordIsFocus}></TextInput>
              </View>
              <View style={{paddingTop: 10}}>
                    <Button 
                    color={"#000"}
                    title = "Sign On"
                    accessibilityLabel= "Sign On"
                    onPress= {() => navigation.navigate("Home", {...user
                    })}
                    ></Button>
              </View>
                  </Card>

        </View>                  
        <View style = {{paddingTop: 10}}>
            <Text>By signing on, you agree to the terms of the </Text>
            <Text style = {styles.hyperlink} onPress={() => Linking.openURL('https://policies.ucf.edu/')}>UCF Policies & Procedures.</Text>
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
      boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
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