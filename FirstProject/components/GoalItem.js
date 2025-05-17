import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
    return (
        <View
            style={styles.goalListItems}>
            <Text style={styles.goalTextColor}>
                {props.text}
            </Text>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalListItems: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#000fff',

    },
    goalTextColor: {
        color: '#ffffff'
    }
});