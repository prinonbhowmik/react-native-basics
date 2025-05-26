import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children, onPressed }) {
    function PressableHandler() {
        console.log("Pressed")
    }
    return (

        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
                onPress={onPressed}>
                <Text style={styles.textContainer}>
                    {children}
                </Text>
            </Pressable>
        </View>

    );

}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: "#4e0329",
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4,
        shadowColor: 'white',
        shadowOffset: { width: 2, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.50
    },
    buttonOuterContainer: {
        borderRadius: 20,
        margin: 8,
        overflow: 'hidden'
    },
    textContainer: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'semibold'
    },
    pressed: {
        opacity: 0.75
    }
});