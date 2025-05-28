import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import { Ionicons } from '@expo/vector-icons';

function generateRandomBetween(min, max, exclude) {
    const rndNm = Math.floor(Math.random() * (max - min)) + min;

    if (rndNm === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNm;
    }
}

let minBoundary = 1;
let maxBOundary = 100;

function GameScreen({ userNumber, onGameOver }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);

    function nextGuessHandler(direction) {

        if ((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie!", "You know it's wrong...", [
                { text: "Sorry!", style: 'cancel' }
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBOundary = currentGuess - 1;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBOundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return <View style={styles.screen}>
        <Title>Opponent's Guess</Title>

        <NumberContainer>{currentGuess}</NumberContainer>

        <Card>
            <Text style={styles.textContainer}>Higher or lower?</Text>

            <View style={styles.buttonContainer}>
                <View style={styles.individiulButtonContainer}>
                    <PrimaryButton onPressed={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons
                            name="remove"
                            size={24}
                            color="white"
                        />
                    </PrimaryButton>
                </View>
                <View style={styles.individiulButtonContainer}>
                    <PrimaryButton onPressed={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons
                            name="add"
                            size={24}
                            color="white"
                        />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    individiulButtonContainer: {
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,

    },
    textContainer: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: 'white',
        textAlign: 'center'
    }
});