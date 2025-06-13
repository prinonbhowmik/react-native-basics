import { View, StyleSheet, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpensesOutput({ expenses, expensesPeriod, emptyText }) {
    let content = <Text style={styles.infoText}>{emptyText}</Text>;

    if (expenses.length > 0) {
        content = <ExpensesList expenses={expenses} />;
    }

    return (
        <View style={styles.container}>

            <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />

            {content}

        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    infoText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 48
    }
});