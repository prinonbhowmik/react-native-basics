import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textD}>
        Prinon Bhowmik
      </Text>

      <View>
        <Text style={styles.textD} >01682424623</Text>
      </View>

      <Button
        title='Click Me'
      />
      <StatusBar style="auto" />
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
  textD: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'black',
    padding: 4
  }
});
