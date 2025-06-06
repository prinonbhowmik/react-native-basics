import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useState, useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../components/game/GuessLogItem";

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
    const [guessRound, setGuessRound] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRound.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBOundary = 100;
    }, []);

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
        setGuessRound(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundListLength = guessRound.length

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
        <View style={styles.listContainer}>
            {/* {guessRound.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
            <FlatList
                data={guessRound}
                renderItem={(itemData) =>

                    <GuessLogItem roundNumber={guessRoundListLength - itemData.index} guess={itemData.item} />

                }
                keyExtractor={(item) => item}

                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
            />

        </View>
    </View>
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
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
        fontFamily: 'oswald-bold',
        color: 'white',
        textAlign: 'center'
    },
    listContainer: {
        flex: 1,
        padding: 16
    }
});