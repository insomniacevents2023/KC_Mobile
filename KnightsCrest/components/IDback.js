import { View, Text} from "react-native";
import { Card } from "@rneui/base";
import QR from "./QR";
import MyBarcode from "./MyBarcode";
export default function IDback(props){
    const {UCFID} = props;
    return(
        <>
            <Card >
                <View>
                    <QR UCFID = {UCFID}></QR>
                </View>
            </Card>
        </>
    )
}


