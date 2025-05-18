import { StyleSheet, View, TextInput, Button } from "react-native";
import { useState } from "react";



function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandeler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder='Your goal'
                onChangeText={goalInputHandeler}
            />
            <Button
                title='Add Goal'
                onPress={addGoalHandler}
            />
        </View>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        width: '70%',
        marginRight: 8,
        padding: 8,
        borderRadius: 6,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'black',

    },
});