import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import LoanItem from "../../components/LoanItem";

export default function LibraryLoans(){
    return(
        <SafeAreaView style = {styles.container}>
            <View>
                <View>
                    <Text>
                        Loans
                    </Text>
                    <Text>
                        Loan balance
                    </Text>
                    {/*
                        Incorporate a FlatList when back-end is complete
                    */}
                    <LoanItem item = "DTC Alienware Laptop" itemID = {1} dueDate = "2022-02-10T09:00:00" pickupLocation = "UCF Downtown Tech Lending" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
    }
)