import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import StartGameScreen from './views/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { use, useState, useEffect } from 'react';
import GameScreen from './views/GameScreen';
import Colors from './constants/Colors';
import GameOverScreen from './views/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [roundStates, setRoundStates] = useState(0);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameOver(false);
  }

  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setRoundStates(numberOfRounds);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setRoundStates(0);
  }



  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen roundNumber={roundStates} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }



  return (
    <LinearGradient
      colors={[Colors.primary600, Colors.primaryYellow]}
      style={styles.rootScreen}>

      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}>

        <SafeAreaView
          style={styles.rootScreen}>
          {screen}
        </SafeAreaView>

      </ImageBackground>

    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f'
  },
  imageStyle: {
    opacity: 0.15
  }
});
