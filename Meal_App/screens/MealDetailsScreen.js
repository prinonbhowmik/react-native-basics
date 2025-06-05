import { View, Text, Image, StyleSheet, FlatList, ScrollView, Pressable } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useLayoutEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from '../store/redux/favorites'
// import { FavouritesContext } from "../store/context/favourite-context";


function MealDetailsScreen({ route, navigation }) {

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id == mealId);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    // React Context
    // const favoriteMealContext = useContext(FavouritesContext);
    // const mealIsFavorite = favoriteMealContext.ids.includes(mealId);

    // function changeFavoriteStatusHandler() {
    //     if (mealIsFavorite) {
    //         favoriteMealContext.removeFavorite(mealId);
    //     } else {
    //         favoriteMealContext.addFavorite(mealId);
    //     }
    // }

    //Redux
    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            dispatch(removeFavorite({ id: mealId }));
        } else {
            dispatch(addFavorite({ id: mealId }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable
                        android_ripple={{ color: '#ccc' }}
                        style={({ pressed }) =>
                            pressed ? { opacity: 0.7 } : styles.button}
                        onPress={changeFavoriteStatusHandler}
                    >
                        <View style={styles.buttonContent}>
                            <Ionicons
                                name="heart"
                                size={18}
                                color={mealIsFavorite ? 'red' : 'white'} />
                            <Text
                                style={styles.buttonText}>
                                {mealIsFavorite ? 'Liked' : 'Like'}
                            </Text>
                        </View>
                    </Pressable>
                );
            },
        });
    }, [navigation, changeFavoriteStatusHandler]);

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