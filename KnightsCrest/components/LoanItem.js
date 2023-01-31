import { Card } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";
import { format } from "date-fns";


export default function LoanItem(props){
    const {itemID, item, dueDate, pickupLocation} = props;

    // Format date
    let myDate = new Date(dueDate);
    let formatDate = format(myDate, 'MM/dd/yyyy')

    return(
        <View>
            <Card containerStyle = {styles.loanItemCard}>
                <View>
                    <Text>[{itemID}]</Text>
                </View>
                <View>
                    <Text>{item}</Text>
                </View>
                <View>
                    <Text>
                        Due: {formatDate}
                    </Text>
                        Pickup: {pickupLocation}
                </View>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    loanItemCard: {
        backgroundColor: "#FDF1BC",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
      }})
