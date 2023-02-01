import { Text, View, StyleSheet } from "react-native";
import { Card } from "@rneui/base";


export default function IDfront(props){
    const {fName, lName, kCashNum, libNumber, UCFID, caste, expDate} = props;

    return(
        <>
            <Card containerStyle = {styles.IDcard}>
                <View style = {styles.nameplate}>
                <Text style={styles.nameText}>{fName} {lName}</Text>
                </View>
                <View>
                    <Text>{expDate}</Text>
                </View>
                <View style = {styles.userProps}>
                    <Text>Icon </Text>
                    <Text>{kCashNum}</Text>
                </View>
                <View style = {styles.userProps}>
                    <Text>LIB </Text>
                    <Text>{libNumber}</Text>
                </View>
                <View style = {styles.userProps}>
                    <Text>UCF ID </Text>
                    <Text>{kCashNum}</Text>
                </View>
                <View>
                    <Text>{caste}</Text>
                </View>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    IDcard:{
        height: 250,
        width: 200,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
    },
    IDcontainer: {
        flexDirection: "row"
    },
    nameplate: {
        backgroundColor:"#000",
        margin: 0
    },
    nameText: {
    },
    userProps: {
        flexDirection: "row"
    }
})
