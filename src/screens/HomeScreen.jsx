import { Button, Text, View } from "react-native";

import Footer from "../components/Footer";


export default function HomeScreen({navigation}) {
    return(
        <View>
            <Text>HomeScreen</Text>
            <Button title='Login' onPress={() => navigation.navigate('Login')} />
            <Button title='DeletarProduto' onPress={() => navigation.navigate('DelProduto')} />
            <Button title='AppAdmin' onPress={() => navigation.navigate('AppAdmin')} />
            <Button title='PainelAdmin' onPress={() => navigation.navigate('PainelAdmin')} />
            <Button title='Recuperar Senha' onPress={() => navigation.navigate('PasswordRecovery')} />
            
            <View>
                <Footer />
            </View>

        </View>
    )
}