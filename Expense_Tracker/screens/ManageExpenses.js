import { Text, View, StyleSheet, TextInput } from "react-native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../context/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

function ManageExpenses({ route, navigation }) {
    const expenseId = route.params?.expenseId;

    const isEditing = !!expenseId;

    const expenseCtx = useContext(ExpenseContext);

    const selectedExpense = expenseCtx.expenses.find((expense) =>
        expense.id == expenseId
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Expense' : 'Add Expense'
        }, [navigation, isEditing]);
    })

    function deleteExpenseHandler() {
        expenseCtx.deleteExpense(expenseId);
        navigation.goBack();
    }

    function cancelHandler() {
        navigation.goBack();
    }

    function confirmHandler(expenseData) {
        if (isEditing) {
            expenseCtx.updateExpense(expenseId, expenseData);
            console.log(expenseData)
        } else {
            expenseCtx.addExpense(expenseData);
            console.log(expenseData)
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <ExpenseForm
                isEditing={isEditing}
                onSubmit={confirmHandler}
                onCancel={cancelHandler}
                defaultValues={selectedExpense}
            />

            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.black100}
                        size={18}
                        onPress={deleteExpenseHandler}
                    />
                </View>
            )}
        </View>
    );
}

export default ManageExpenses;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'white'
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.gray300,
        alignItems: 'center',
    },

});