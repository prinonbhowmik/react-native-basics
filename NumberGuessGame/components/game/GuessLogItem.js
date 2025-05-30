import { View, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";


function GuessLogItem({ roundNumber, guess }) {
    return <View style={styles.listItem}>
        <Text style={styles.textContainer}>#{roundNumber}</Text>
        <Text style={styles.textContainer}>Opponent's Guess: {guess}</Text>
    </View>
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colors.primaryYellow,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        elevation: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        fontFamily: 'oswald-regular'
    },
    textContainer: {
        fontFamily: 'oswald-regular'
    }
});