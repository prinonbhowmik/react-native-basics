
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  function goalInputHandeler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, enteredGoalText])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='Your goal'
          onChangeText={goalInputHandeler}
        />
        <Button
          backgroundColor='red'
          title='Add Goal'
          onPress={addGoalHandler}
        />
      </View>
      <View
        style={styles.goalsContainer}>


        {/* Scrollview Demo */}
        {/* <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={false}>

          {courseGoals.map((goal) => (
            <View
              key={goal}
              style={styles.goalListItems}>
              <Text style={styles.goalTextColor}>
                {goal}
              </Text>
            </View>
          ))}

        </ScrollView> */}

        { /* FlatList Demo */}



      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    width: '70%',
    marginRight: 8,
    padding: 8,
    borderRadius: 6,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',

  },
  goalsContainer: {
    flex: 5,
    paddingBottom: 10
  },
  goalListItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#e345ee',

  },
  goalTextColor: {
    color: 'white'
  }
});
