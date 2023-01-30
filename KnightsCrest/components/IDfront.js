import { Text, View, StyleSheet } from "react-native";
import { Card } from "@rneui/base";


export default function IDfront(props){
    const {fName, lName, kCashNum, libNumber, UCFID, caste, expDate} = props;

    return(
        <View>
            <Card style = {styles.IDcard}>
                <Text style={styles.nameText}>{fName} {lName}</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    IDcontainer: {
        flexDirection: "row"
    },
    nameplate: {
        backgroundColor:"#000",
       
        
    },
    nameText: {
        color: "#fff",
        backgroundColor: "#000",
        padding: 10
    },
    userProps: {
        flexDirection: "row"
    }
})
