import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {

  // const [loaded] = useFonts({
  //   'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
  //   'robot-medium': require('./assets/fonts/Roboto-Medium.ttf'),
  //   'robot-semibold': require('./assets/fonts/Roboto-SemiBold.ttf'),
  //   'robot-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  // });

  // if (!loaded) {
  //   return <AppLoading />
  // }

  return (
    <View style={styles.container}>
      <CategoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
