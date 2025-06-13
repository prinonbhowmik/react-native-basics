import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

function Input({ lable, textInputConfig }) {

    let inputStyles = [styles.input]

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label} >{lable}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}

export default Input;

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,

    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.accent500,
        marginBottom: 4
    },
    input: {
        borderColor: GlobalStyles.colors.accent500,
        borderWidth: 2,
        borderRadius: 6,
        padding: 10,
        tintColor: GlobalStyles.colors.black100,
        fontSize: 16
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});