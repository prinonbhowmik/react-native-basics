import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridItems from "../components/CategoryGridItems";

function renderCategories(itemData) {
    return (
        <CategoryGridItems title={itemData.item.title} color={itemData.item.colors} />
    );
}

function CategoriesScreen() {

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategories}
        />
    );
}

export default CategoriesScreen;