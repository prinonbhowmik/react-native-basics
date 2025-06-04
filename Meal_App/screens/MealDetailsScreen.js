import { View, Text, Image, StyleSheet, FlatList, ScrollView, Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";


function MealDetailsScreen({ route, navigation }) {

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id == mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable
                        android_ripple={{ color: '#ccc' }}
                        style={({ pressed }) => pressed ? { opacity: 0.7 } : styles.button}
                    >
                        <View style={styles.buttonContent}>
                            <Ionicons
                                name="heart-outline"
                                size={18}
                                color='white' />
                            <Text
                                style={styles.buttonText}>
                                Like
                            </Text>
                        </View>
                    </Pressable>
                );
            },
        });
    });

    function renderIngridents(itemData) {
        const item = itemData.item;

        return (
            <View style={styles.ingridentsView} >
                <Text style={styles.text}>{item}</Text>
            </View>
        )
    }

    return (
        <ScrollView
            bounces={false}
        >
            <View>
                <Image
                    style={styles.image}
                    source={{ uri: selectedMeal.imageUrl }}
                />

                <MealDetails
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                />

                <View style={{
                    margin: 8
                }}>
                    <Text style={{
                        marginTop: 16,
                        marginStart: 8,
                        marginBottom: 4,
                        fontFamily: 'roboto-semibold'
                    }}>Ingredients:</Text>

                    <View style={styles.ingridentsView}>
                        {selectedMeal.ingredients.map((data) => (

                            <Text
                                style={styles.text}
                                key={data}>
                                {data}
                            </Text>

                        ))}
                    </View>
                </View>

                <View style={{
                    marginStart: 8,
                    marginEnd: 8,
                    marginTop: 8,
                    marginBottom: 16
                }}>
                    <Text style={{
                        marginTop: 16,
                        marginStart: 8,
                        marginBottom: 4,
                        fontFamily: 'roboto-semibold'
                    }}>Steps:</Text>

                    <FlatList
                        data={selectedMeal.steps}
                        keyExtractor={(item) => item.id}
                        renderItem={renderIngridents}
                        scrollEnabled={false}
                    />
                </View>

            </View>
        </ScrollView >
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
        fontSize: 14,
    },

    ingridentsView: {
        backgroundColor: 'lightblue',
        padding: 4,
        borderRadius: 8,
        marginHorizontal: 8,
        marginVertical: 3
    },
    button: {
        backgroundColor: 'blue',
        padding: 6,
        borderRadius: 5,
    },
    buttonContent: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    buttonText: {
        color: 'white',
        marginStart: 4,
        marginEnd: 4
    },
});