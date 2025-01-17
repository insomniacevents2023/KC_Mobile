import { View, Text, StyleSheet} from "react-native";
import { Card } from "@rneui/base";
import QR from "./QR";
import MyBarcode from "./MyBarcode";
export default function IDback(props){
    const {UCFID} = props;
    return(
        <>
            <Card containerStyle = {styles.IDcard}>
                <View >
                    <Text>QR CODE</Text>
                </View>
                <View style = {{backgroundColor:  "#000", padding: 5, borderRadius: 5}}>  
                    <QR UCFID = {UCFID}></QR>
                </View>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    IDcard:{
        height: 250,
        width: 200,
        alignContent: "center",
        justifyContent: "center"
    },
})
