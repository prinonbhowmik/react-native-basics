import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../context/expense-context";
import { getRecentDates } from "../utils/date";

function RecentExpenses() {
    const expenseCtx = useContext(ExpenseContext);
    const recent = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const recentDates = getRecentDates(today, 7);

        return (expense.date >= recentDates) && (expense.date <= today);
    });
    return (
        <ExpensesOutput expenses={recent} expensesPeriod="Last 7 days" emptyText={"No recent expenses!"} />
    );
}

export default RecentExpenses;