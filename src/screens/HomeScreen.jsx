import { Button, Text, View } from "react-native";


export default function HomeScreen({navigation}) {
    return(
        <View>
            <Text>HomeScreen</Text>
            <Button title='Login' onPress={() => navigation.navigate('Login')} />
        </View>
    )
}