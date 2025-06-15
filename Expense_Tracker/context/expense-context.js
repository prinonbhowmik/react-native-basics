import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    setExpenses: (expenses) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state];
        case 'SET':
            const inverted = action.payload.reverse();
            return inverted;
        case 'UPDATE':
            const updateIndex = state.findIndex(
                (expense) => expense.id == action.payload.id);
            const updateData = state[updateIndex];
            const updatedItem = { ...updateData, ...action.payload.data }
            const updatedExpense = [...state];
            updatedExpense[updateIndex] = updatedItem;
            return updatedExpense;
        case 'DELETE':
            return state.filter((expense) => expense.id != action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({ children }) {
    const [expenseState, dispatch] = useReducer(expensesReducer, []);

    function addExpense({ expenseData }) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function setExpenses(expenses) {
        dispatch({ type: 'SET', payload: expenses });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expenseState,
        setExpenses: setExpenses,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    }

    return (
        <ExpenseContext.Provider
            value={value}>{children}
        </ExpenseContext.Provider>
    );
}

export default ExpensesContextProvider;