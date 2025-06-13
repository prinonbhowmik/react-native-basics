import { View, StyleSheet } from "react-native";
import Input from "./Input";
import { useState } from "react";
import CustomButtons from "../UI/CustomButtons";



function ExpenseForm({ isEditing, onCancel, onSubmit }) {
    const [inputValues, setInputValues] = useState({
        amount: '',
        date: '',
        description: ''
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
            description: inputValues.description
        };

        onSubmit(expenseData);
    }

    return (
        <View style={{ marginBottom: 16 }}>
            <Input lable="Amount" textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: inputChangedHandler.bind(this, 'amount'),
                value: inputValues.amount
            }} />
            <Input lable="Date" textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: inputChangedHandler.bind(this, 'date'),
                value: inputValues.date
            }} />
            <Input lable="Description" textInputConfig={{
                multiline: true,
                onChangeText: inputChangedHandler.bind(this, 'description'),
                value: inputValues.description
            }} />

            <View style={styles.buttonContainer}>
                <CustomButtons
                    style={styles.buttonIndividual}
                    title={'Cancel'}
                    onPress={onCancel}
                    mode="flat" />
                <CustomButtons
                    style={styles.buttonIndividual}
                    title={isEditing ? 'Update' : 'Add'}
                    onPress={submitHandler}
                />
            </View>
        </View>
    );
}

export default ExpenseForm;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonIndividual: {
        marginHorizontal: 8
    }
});