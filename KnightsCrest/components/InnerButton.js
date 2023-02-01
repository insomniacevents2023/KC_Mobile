import { View, Text , StyleSheet, Pressable} from "react-native";

export default function InnerButton(props){
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
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)"
    }
})