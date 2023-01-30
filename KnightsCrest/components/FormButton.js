import { View, Text , StyleSheet, Pressable} from "react-native";

export default function FormButton(props){
    const {title} = props;
    return(
        <>
        <Pressable style = {styles.button}>
            <Text>{title}</Text>
        </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 250,
        height:35,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "#ffc904",
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
          height: 1,
          width: 1
        }
  },
})