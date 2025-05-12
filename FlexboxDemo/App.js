import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, padding: 50, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center' }}>

      <View
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text style={{ color: 'white' }}>1</Text>
      </View>

      <View
        style={{
          backgroundColor: 'cyan',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>2</Text>
      </View>

      <View
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text
          style={{ color: 'white' }}
        >3</Text>
      </View>

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
