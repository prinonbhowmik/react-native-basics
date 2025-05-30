import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

function NumberContainer({ children }) {
    return <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
}

export default NumberContainer;


const styles = StyleSheet.create({

    container: {
        borderWidth: 4,
        borderColor: Colors.primaryYellow,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '60%'
    },
    numberText: {
        color: Colors.primaryYellow,
        fontSize: 36,
        fontFamily: 'oswald-bold'
    }
});