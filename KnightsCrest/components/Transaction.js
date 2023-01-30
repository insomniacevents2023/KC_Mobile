import { View,Text, StyleSheet } from "react-native"
import { format } from "date-fns";

export default function Transaction(props){
    const {date, amount} = props;
    let myDate = new Date(date);
    let formatDate = format(myDate, 'MM/dd/yyyy')
    return(
        <View style={{flexDirection:"Row", justifyContent:"space-between"}}>
            <View>
                <Text>{formatDate}</Text>
            </View>
            <View>
                <Text>
                    {amount.toFixed(2)}
                </Text>
            </View>
        </View>
    )

}
