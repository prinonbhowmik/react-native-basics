import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";


function CustomButtons({ title, onPress, mode, style }) {

    return (
        <View style={style}>
            <Pressable
                style={({ pressed }) => pressed && styles.pressed}
                onPress={onPress}>
                <View style={[styles.button, mode == 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode == 'flat' && styles.flatText]}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default CustomButtons;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.black100
    },
    flat: {
        backgroundColor: 'transparent'
    },
    buttonText: {
        color: GlobalStyles.colors.accent500,
        textAlign: 'center'
    },
    flatText: {
        color: GlobalStyles.colors.black100
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4
    }
});