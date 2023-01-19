import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Linking } from 'react-native';
import { Card } from '@rneui/themed';
import { useState } from 'react';
import { Button } from '@rneui/base';

export default function Login({navigation}) {

    const [accountFocus, setAccountFocus] = useState(false);
    const accountIsFocus = accountFocus ? styles.loginInputFocus : styles.loginInput
    const [PasswordFocus, setPasswordFocus] = useState(false);
    const passwordIsFocus = PasswordFocus ? styles.loginInputFocus : styles.loginInput;

    return (
        <View style={styles.container}>
          <Text>University of Central Florida</Text>
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
                    onPress={()=> navigation.navigate('Home' , {name: Home})}
                    ></Button>
                  </Card>
                  <Text>By signing on, you agree to the terms of the </Text>
                  <Text style = {styles.hyperlink} onPress={() => Linking.openURL('https://policies.ucf.edu/')}>UCF Policies & Procedures.</Text>
                <StatusBar style="auto" />
        </View>)
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
    }
  });