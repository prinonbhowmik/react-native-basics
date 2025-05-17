
import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

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

        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
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
