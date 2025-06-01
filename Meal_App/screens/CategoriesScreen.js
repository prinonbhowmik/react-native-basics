import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridItems from "../components/CategoryGridItems";

function CategoriesScreen({ navigation }) {

    function renderCategories(itemData) {

        function pressHandler() {
            navigation.navigate('MealsOverview', {
                categoryId: itemData.item.id,
                name: itemData.item.title
            });
        }
        return (
            <CategoryGridItems
                title={itemData.item.title}
                color={itemData.item.color}
                onPressed={pressHandler}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategories}
            numColumns={2}
        />
    );
}

export default CategoriesScreen;