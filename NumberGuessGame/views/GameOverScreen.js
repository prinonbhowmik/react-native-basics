import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/Colors";
import PrimaryButton from "../components/ui/PrimaryButton"

function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {
    return <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>

        <View>
            <Text style={styles.text}>
                Your phone needed
                <Text style={styles.highlight}> {roundNumber} </Text>
                rounds to guess number
                <Text style={styles.highlight}> {userNumber}</Text>.</Text>
            <PrimaryButton onPressed={onStartNewGame}>Start New Game</PrimaryButton>
        </View>

    </View>;
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        borderRadius: deviceWidth < 380 ? 75 : 150,
        width: deviceWidth < 380 ? 150 : 300,
        height: deviceWidth < 380 ? 150 : 300,
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
        fontSize: 18
    },
    text: {
        fontSize: 18,
        fontFamily: 'oswald-regular'
    }
});