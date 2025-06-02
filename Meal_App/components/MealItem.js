import { View, Text, StyleSheet, Pressable, Image, Platform } from "react-native";


function MealItem({ title, imageUrl, onPressed, affordability, complexity, duration }) {
    return (
        <View style={styles.gridItem} >
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? { opacity: 0.5 } : null}
                onPress={onPressed} >
                <View
                    style={{ borderRadius: 8, overflow: 'hidden' }}>
                    <View >
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: imageUrl }}
                        />
                        <Text style={styles.titleStyle}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>

                </View>
            </Pressable>

        </View >
    );
};

export default MealItem;

const styles = StyleSheet.create({
    gridItem: {
        borderRadius: 8,
        margin: 10,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS == 'android' ? 'hidden' : 'visible'
    },
    titleStyle: {
        fontSize: 16,
        fontFamily: 'roboto-semibold',
        color: 'black',
        margin: 4,
        textAlign: 'center',
    },
    imageStyle: {
        width: '100%',
        height: 200
    },
    details: {
        margin: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        fontFamily: 'roboto-regular'
    }
});