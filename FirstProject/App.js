
import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';


export default function App() {

  const [courseGoals, setCourseGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, { text: enteredGoalText, id: Math.random().toString() }])
  }

  return (
    <View style={styles.container}>

      <GoalInput onAddGoal={addGoalHandler} />

      <View
        style={styles.goalsContainer}>

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false} />

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

  goalsContainer: {
    flex: 5,
    paddingBottom: 10
  }

});
