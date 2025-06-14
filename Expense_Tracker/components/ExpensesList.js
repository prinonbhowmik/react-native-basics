import { FlatList, Text } from "react-native";
import ExpenseItems from "./ExpenseItems";


function renderExpenseItems(itemData) {
    return <ExpenseItems {...itemData.item} />;
}

function ExpensesList({ expenses }) {

    return (
        <FlatList
            style={{ marginTop: 8 }}
            data={expenses}
            renderItem={renderExpenseItems}
            keyExtractor={(item) => item.id}
        />
    );

}

export default ExpensesList;