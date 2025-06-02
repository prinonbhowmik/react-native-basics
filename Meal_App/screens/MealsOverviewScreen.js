import { View, FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
    const catName = route.params.name
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0
    });



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

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItems}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    }
});