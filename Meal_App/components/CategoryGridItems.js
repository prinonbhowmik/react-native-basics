import { Pressable, View, Text, StyleSheet, Platform } from "react-native";



function CategoryGridItems({ title, color, onPressed }) {
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
                onPress={onPressed}
            >
                <View style={[styles.innerContainer, { backgroundColor: color }]}>
                    <Text style={styles.textContainer}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CategoryGridItems;

const styles = StyleSheet.create({
    textContainer: {
        fontFamily: 'roboto-bold',
        fontSize: 18
    },
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible'
    },
    innerContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    button: { flex: 1 },
    buttonPressed: {
        opacity: 0.5
    }
});