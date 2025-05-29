import { Text, StyleSheet } from "react-native";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>

}

export default Title;


const styles = StyleSheet.create({
    title: {
        fontFamily: 'oswald-bold',
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        // borderWidth: 2,
        // borderColor: Colors.primaryYellow,
        // borderRadius: 8,
        padding: 4
    }
});
