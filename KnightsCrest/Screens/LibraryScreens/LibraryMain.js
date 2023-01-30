import { View, Text , StyleSheet, Pressable} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LibraryMain({navigation, route}){
    return(
    <SafeAreaView>
        <View style = {styles.container}>
            <View>
            <Pressable style = {styles.button}></Pressable>
            </View>
            <View>
            <Pressable style = {styles.button}></Pressable>
            </View>
            <View>
            <Pressable style = {styles.button}></Pressable>
            </View>
            <View>
            <Pressable style = {styles.button}></Pressable>
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
    },
    button: {
        width: 240,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderLeftWidth: 5,
        borderStartColor: "#ffc904",
        borderRadius: 2,
        borderColor: "#ffc904",
        elevation: 3,
        backgroundColor: 'white',
    }})