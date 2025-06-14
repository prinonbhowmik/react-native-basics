import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../context/expense-context";

function AllExpenses() {
    const expenseCtx = useContext(ExpenseContext);
    return (
        <ExpensesOutput
            expenses={expenseCtx.expenses}
            expensesPeriod={"Total"}
            emptyText={"No Expenses!"} />
    );
}

export default AllExpenses;