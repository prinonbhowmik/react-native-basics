import { Text, StyleSheet, Platform } from "react-native";
import Colors from "../../constants/Colors";

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>

}

export default Title;


const styles = StyleSheet.create({
    title: {
        fontFamily: 'oswald-bold',
        fontSize: 24,
        // color: Platform.OS == 'android' ? 'white' : 'yellow',
        color: Platform.select({ ios: Colors.primaryYellow, android: 'white' }),
        textAlign: 'center',
        padding: 4,
        maxWidth: '80%'
    }
});
