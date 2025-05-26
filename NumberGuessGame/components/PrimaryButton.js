import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
    function PressableHandler() {
        console.log("Pressed")
    }
    return (
        <Pressable onPress={PressableHandler}>
            <View style={styles.buttonContainer}>
                <Text style={styles.textContainer}>
                    {children}
                </Text>
            </View>
        </Pressable>
    );

}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#4e0329",
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginHorizontal: 8
    },
    textContainer: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'semibold'
    }
});