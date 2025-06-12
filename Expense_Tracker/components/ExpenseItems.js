import { Pressable, View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../constants/styles";
import { getFormattedDate } from "../utils/date";

function ExpenseItems({ id, description, amount, date }) {

    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpense', {
            expenseId: id
        })
    }
    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => pressed && styles.pressed}
        >
            <View style={styles.container}>
                <View>
                    <Text style={styles.description}>{description}</Text>

                    <Text style={styles.textbase}>{getFormattedDate(date)}</Text>
                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <View style={styles.amountContainer}>
                        <Text style={styles.amountText}>৳ {amount.toFixed(2)}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

export default ExpenseItems;

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.accent500,
        borderRadius: 12,
        elevation: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textbase: {
        color: GlobalStyles.colors.black100
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        color: GlobalStyles.colors.black100
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: GlobalStyles.colors.black100,
        borderRadius: 6,


    },
    amountText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: GlobalStyles.colors.accent500
    },
    pressed: {
        opacity: 0.75
    }
});