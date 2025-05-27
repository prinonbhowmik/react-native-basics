import { StyleSheet, SafeAreaView, ImageBackground } from 'react-native';
import StartGameScreen from './views/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './views/GameScreen';
import Colors from './constants/Colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
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
