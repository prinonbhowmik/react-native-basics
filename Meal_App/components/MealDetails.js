import { View, Text, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability }) {

    return (
        <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
        </View>
    );
}
export default MealDetails;

const styles = StyleSheet.create({
    details: {
        margin: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        fontFamily: 'roboto-regular'
    }
});