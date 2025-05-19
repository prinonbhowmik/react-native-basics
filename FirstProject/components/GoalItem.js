import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
            <View style={styles.goalListItems}>
                <Text style={styles.goalTextColor}>{props.text}</Text>
            </View>
        </Pressable>
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