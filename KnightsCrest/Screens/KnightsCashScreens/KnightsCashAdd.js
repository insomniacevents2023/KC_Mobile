import { View, Text, StyleSheet} from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { Card } from '@rneui/themed';
import FormButton from "../../components/FormButton";
import { SafeAreaView } from "react-native-safe-area-context";

export default function KnightsCashAdd({navigation}){
    
    return(
        <SafeAreaView style = {styles.container}>
        <View >
            <View>
                <Text>ADD KNIGHTS CASH FUND</Text>
            </View>
            <Card containerStyle = {styles.formCard}>
                <View>
                    <Text>Amount to Add</Text>
                    <TextInput style = {styles.fieldInput}></TextInput>
                </View>
            </Card>
            <Card containerStyle = {styles.formCard}>
                <View>
                    <Text>Email Address</Text>
                    <TextInput style = {styles.fieldInput}></TextInput>
                    </View>
                <View>
                    <Text>Cardholder Name</Text>
                    <TextInput style = {styles.fieldInput}></TextInput>
                    </View>
                <View>
                    <Text>Card Number</Text>
                    <TextInput style = {styles.fieldInput}></TextInput>
                </View>
                <View style = {{flexDirection: "Row", justifyContent:"space-between" }}>
                    <View>
                        <Text>Security Code</Text>
                        <TextInput style = {styles.fieldInput}></TextInput>
                    </View>
                    <View>
                        <Text>Exp. Date</Text>
                        <TextInput style = {styles.fieldInput}></TextInput>
                    </View>
                </View>
            </Card>
            <View style = {{paddingTop: 10}}>
            {/* Incorporate validation and data management */}
            <FormButton title = "Add Funds"></FormButton>
            </View>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formCard: {
        backgroundColor: "#FDF1BC",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
      },
      fieldInput: {
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#fff',
        fontSize: 15,
        color: "#D4D4D4"
      },
    })