import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textD}
          placeholder='Your goal' />
        <Button
          backgroundColor='red'
          title='Add Goal'
        />
      </View>
      <View>
        <Text>List of goals....</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textD: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    width: '80%',
  },

});
