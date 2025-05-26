import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './views/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <LinearGradient
      colors={['#4e0320', '#ddb52f']}
      style={styles.rootScreen}>

      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}>

        <StartGameScreen />

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
