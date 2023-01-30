import { View, Text , StyleSheet, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import InnerButton from "../../components/InnerButton";

export default function KnightsCashMain({navigation, route}){
    return(
    <SafeAreaView>
        <View style = {styles.container}>
            <View style = {{paddingTop: 10}}>
                <InnerButton title = "Balance"/>
            </View>
            <View style = {{paddingTop: 10}}>
                <InnerButton title = "Add Funds"/>
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