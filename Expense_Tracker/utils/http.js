import axios from "axios";

const url = 'https://expense-tracker-expo-1c449-default-rtdb.firebaseio.com/';

export async function storeExpense(expenseData) {
    const response = axios.post(
        url + 'expenses.json',
        expenseData
    );

    const id = response.data.name;
    return id;
}

export async function fetchExpenses() {
    const response = await axios.get(
        url + 'expenses.json'
    );

    const expenses = [];

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        }
        expenses.push(expenseObj);
    }
    return expenses;
}

export function updateExpense(id, expenseData) {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

