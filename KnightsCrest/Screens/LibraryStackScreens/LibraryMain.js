import { View, Text , StyleSheet, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InnerButton from "../../components/InnerButton";

export default function LibraryMain({navigation, route}){
    return(
    <SafeAreaView style = {styles.container}>
        <View>
            <View style = {{paddingTop: 10}}>
                <InnerButton title = "Library Loans"/>
            </View>
            <View style = {{paddingTop: 10}}>
                <InnerButton title = "Requests"/>
            </View>
            <View style = {{paddingTop: 10}}>
                <InnerButton title = "Returns"/>
            </View>
            <View style = {{paddingTop: 10}}>
                <InnerButton title = "Late Fees/Fines"/>
            </View>
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },})