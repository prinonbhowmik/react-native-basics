import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";

function GameOverScreen() {
    return <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>

        <View>
            <Text style={styles.text}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess number <Text style={styles.highlight}>Y</Text>.</Text>
        </View>

    </View>;
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    highlight: {
        color: Colors.primary500,
        fontWeight: 'bold',
        fontSize: 24
    },
    text: {
        fontSize: 24
    }
});