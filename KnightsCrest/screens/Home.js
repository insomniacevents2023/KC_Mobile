import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Card } from '@rneui/themed';
import { useState } from 'react';
import { Button } from '@rneui/base';

export default function Home({navigation, route}){
    const {fName} = route.params 
    return(
        <View style={styles.container}>
        </View>
    );
}
const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        }})