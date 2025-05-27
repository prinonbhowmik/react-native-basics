import { TextInput, Button, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from "react";
import Colors from "../constants/Colors";

function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('')

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }
    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber > 100 || chosenNumber <= 0) {
            Alert.alert(
                'Invalid Number',
                'Number input should be between 1 to 99.',
                [{ text: 'Okay', style: 'cancel', onPress: resetInputHandler }]
            );
            return;
        }

        onPickNumber(chosenNumber);
    }

    return <View style={styles.mainContainer}>
        <TextInput
            style={styles.inputContainer}
            maxLength={2}
            keyboardType="number-pad"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredNumber}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.individiulButtonContainer}>
                <PrimaryButton onPressed={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.individiulButtonContainer}>
                <PrimaryButton
                    onPressed={confirmInputHandler}>
                    Confirm
                </PrimaryButton>
            </View>
        </View>
    </View>
}

export default StartGameScreen;

const styles = StyleSheet.create({
    mainContainer: {
        padding: 16,
        marginTop: 80,
        marginHorizontal: 20,
        alignItems: 'center',
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.50
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,

    },
    inputContainer: {
        borderWidth: 1,
        borderColor: Colors.primaryYellow,
        padding: 10,
        width: '90%',
        margin: 8,
        padding: 8,
        borderRadius: 6,
        color: Colors.primaryYellow,
        marginVertical: 8,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    individiulButtonContainer: {
        flex: 1
    }
});