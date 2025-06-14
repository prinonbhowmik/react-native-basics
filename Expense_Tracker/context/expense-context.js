import { createContext, useReducer } from "react";

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
    {
        id: 'e4',
        description: 'Gold leaf switch',
        amount: 300,
        date: new Date('2025-06-12')
    },
];

export const ExpenseContext = createContext({
    expenses: [],
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const newid = new Date().toString() + Math.random().toString();
            return [{ ...action.payload, id: newid }, ...state];
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
    const [expenseState, dispatch] = useReducer(expensesReducer, dummy_expense);

    function addExpense({ expenseData }) {
        dispatch({ type: 'ADD', payload: expenseData });
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id });
    }

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }

    const value = {
        expenses: expenseState,
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