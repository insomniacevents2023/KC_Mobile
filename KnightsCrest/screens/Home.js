import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Header } from '@rneui/themed';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function Home({navigation, route}){
    const {fName} = route.params 
    return(
      <SafeAreaProvider>
        <View style = {styles.container}>
          <Header style ={styles.headerContainer}></Header>
        </View>
      </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        headerContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#397af8',
          marginBottom: 20,
          width: '100%',
          paddingVertical: 15,
        },})