import { Pressable, View, Text } from "react-native";



function CategoryGridItems({ title, colors }) {
    return (
        <View>
            <Pressable>
                <Text>{title}</Text>
            </Pressable>
        </View>
    );
}

export default CategoryGridItems;