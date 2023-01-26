import { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native"
import { Card } from "@rneui/base"
import IDfront from "./IDfront";


export default function FlipCard(props) {
    const {isFlipped, fName, lName, kCashNum, libNumber, UCFID, caste, expDate} = props;

    return(
    <View>
        <Card>
            <IDfront 
            fName = {fName}
            lName = {lName} 
            kCashNum ={kCashNum} 
            libNumber = {libNumber} 
            UCFID = {UCFID}
            caste = {caste}
            expDate = {expDate}></IDfront>
        </Card>
    </View>
    )
}

const styles = StyleSheet.create({
    IDCard: {
        width: 300,
        height: 200,
    },
});