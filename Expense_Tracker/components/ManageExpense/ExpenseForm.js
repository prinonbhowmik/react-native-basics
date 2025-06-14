import { View, StyleSheet, Text } from "react-native";
import Input from "./Input";
import { useState } from "react";
import CustomButtons from "../UI/CustomButtons";
import { getFormattedDate } from "../../utils/date";
import { GlobalStyles } from "../../constants/styles";


function ExpenseForm({ isEditing, onCancel, onSubmit, defaultValues }) {
    const [inputValues, setInputValues] = useState({
        amount: {
            value: defaultValues ? defaultValues.amount.toString() : '',
            isValid: true,
        },
        date: {
            value: defaultValues ? getFormattedDate(defaultValues.date) : '',
            isValid: true,
        },
        description: {
            value: defaultValues ? defaultValues.description : '',
            isValid: true,
        },
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputValues((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: { value: enteredValue, isValid: true }
            };
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: +inputValues.amount.value,
            date: new Date(inputValues.date.value),
            description: inputValues.description.value
        };

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            // Alert.alert('Invalid input', 'Please check your input values');
            setInputValues((currentInputValues) => {
                return {
                    amount: { value: currentInputValues.amount.value, isValid: amountIsValid },
                    date: { value: currentInputValues.date.value, isValid: dateIsValid },
                    description: {
                        value: currentInputValues.description.value,
                        isValid: descriptionIsValid,
                    },
                };
            });
            return;
        }

        onSubmit(expenseData);
    }
    const formIsInvalid =
        !inputValues.amount.isValid ||
        !inputValues.date.isValid ||
        !inputValues.description.isValid;

    return (
        <View style={{ marginBottom: 16 }}>
            <Input
                lable="Amount"
                invalid={!inputValues.amount.isValid}
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangedHandler.bind(this, 'amount'),
                    value: inputValues.amount.value
                }} />
            <Input
                lable="Date"
                invalid={!inputValues.date.isValid}
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangedHandler.bind(this, 'date'),
                    value: inputValues.date.value
                }} />
            <Input
                lable="Description"
                invalid={!inputValues.description.isValid}
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputChangedHandler.bind(this, 'description'),
                    value: inputValues.description.value
                }} />

            {formIsInvalid && (
                <Text style={styles.errorText}>
                    Invalid input values - please check your entered data!
                </Text>
            )}

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
    },
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8,
    },
});