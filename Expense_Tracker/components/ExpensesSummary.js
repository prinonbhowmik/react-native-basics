import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";


function ExpensesSummary({ expenses, periodName }) {
    const expensesSum = expenses.reduce((sum, expense) => {
        return sum + expense.amount
    }, 0);
    return (
        <View style={styles.container}>
            <Text style={styles.periodText}>{periodName}</Text>

            <Text style={styles.sumText}> ৳ {expensesSum.toFixed(2)}</Text>
        </View>
    );
}

export default ExpensesSummary;

const styles = StyleSheet.create({

    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.black100,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',

    },
    periodText: {
        fontSize: 14,
        color: GlobalStyles.colors.accent500

    },
    sumText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.accent500
    }
});