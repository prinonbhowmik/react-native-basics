import { View, FlatList, StyleSheet, Text } from "react-native";
import { useContext } from "react";
// import { FavouritesContext } from "../store/context/favourite-context";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

function FavoriteScreen() {
    //React Context
    // const favoriteMealContext = useContext(FavouritesContext);
    //Redux
    const favoriteMealIds = useSelector(state => state.favoriteMeals.ids);
    const navigation = useNavigation();

    const favoriteMeals = MEALS.filter(meal => favoriteMealIds.includes(meal.id));

    function renderMealItems(itemData) {
        const item = itemData.item;
        const mealItemsProps = {
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration
        }

        function pressHandler() {
            navigation.navigate('MealDetails', {
                mealId: item.id,
                mealName: item.title,
                mealImage: item.imageUrl
            });
        }

        return <MealItem
            {...mealItemsProps}
            onPressed={pressHandler}
        />
    };
    if (favoriteMeals.length == 0) {
        return (
            <View style={styles.noFavView}>
                <Text style={styles.noFavText}>No favourite Items</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={favoriteMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItems}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    noFavView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    noFavText: {
        fontFamily: 'roboto-semibold',
        fontSize: 18,
        color: 'blue'
    }
});