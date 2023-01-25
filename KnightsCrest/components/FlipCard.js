import { View, StyleSheet, Text } from "react-native"
import { Card } from "@rneui/base"


export default function FlipCard(props) {
    return (
        <View>
            <Card styles = {styles.IDCard}>
                <Text>
                    Some text
                </Text>
            </Card>
        </View>
        
        )
}

const styles = StyleSheet.create({
    IDCard: {
        width: 300,
        height: 200,
    },
});