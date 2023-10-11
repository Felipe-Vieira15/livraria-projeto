import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: "#606",
        paddingBottom: 5,
        paddingHorizontal: 5,
    },
    headerTextStyle: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'center'
    }
});

export default function Header({title}) {

    return (
        <View>
            <Text style={styles.headerTextStyle}>
                {title}
            </Text>
        </View>
    );
}