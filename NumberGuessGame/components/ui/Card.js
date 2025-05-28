import { StyleSheet, View } from "react-native";
import Colors from "../../constants/Colors";


function Card({ children }) {

    return <View style={styles.card}>
        {children}
    </View>
}

export default Card;

const styles = StyleSheet.create({

    card: {
        padding: 16,
        marginTop: 80,
        marginHorizontal: 20,
        alignItems: 'center',
        backgroundColor: Colors.primary800,
        borderRadius: 10,
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.50
    },
});