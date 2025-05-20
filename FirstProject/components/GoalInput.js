import { StyleSheet, View, TextInput, Button, Alert, Modal } from "react-native";
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
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder='Your goal'
                    onChangeText={goalInputHandeler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button
                            title='Add Goal'
                            onPress={addGoalHandler}
                        />
                    </View>

                    <View style={styles.buttonView}>
                        <Button
                            title="Cancel"
                            onPress={props.onCancel}
                        />
                    </View>

                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        width: '80%',
        marginRight: 8,
        padding: 8,
        borderRadius: 6,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',

    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row'
    },
    buttonView: {
        width: '30%',
        marginHorizontal: 10
    }
});