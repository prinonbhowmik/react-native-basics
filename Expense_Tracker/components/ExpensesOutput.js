import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const dummy_expense = [
    {
        id: 'e1',
        description: 'Nike Airforce 1',
        amount: 1100,
        date: new Date('2025-01-19')
    },
    {
        id: 'e2',
        description: 'Denim Black color',
        amount: 500,
        date: new Date('2025-02-10')
    },
    {
        id: 'e3',
        description: 'Restaurent bill',
        amount: 600,
        date: new Date('2025-03-15')
    },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>

            <ExpensesSummary expenses={dummy_expense} periodName={expensesPeriod} />

            <ExpensesList expenses={dummy_expense} />

        </View>
    );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    }
});