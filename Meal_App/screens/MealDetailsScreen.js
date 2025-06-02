import { View, Text, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";


function MealDetailsScreen({ route }) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id == mealId);
    return (
        <View>
            <Image
                style={styles.image}
                source={{ uri: selectedMeal.imageUrl }}
            />
            <Text style={styles.text}>Duration: {selectedMeal.duration} min</Text>
        </View>
    );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    text: {
        fontFamily: 'roboto-regular',
        margin: 8,
        fontSize: 14,
    }
});