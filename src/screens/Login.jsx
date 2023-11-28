import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Usuário..."
          placeholderTextColor="#011824"
          onChangeText={(text) => setUsername(text)}
        />

      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Senha..."
          placeholderTextColor="#011824"
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text styTouchableOpacityle={styles.loginText}>Entrar</Text>
      </TouchableOpacity>
      
      <View style={{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        <View>
          <Text style={{
            color: 'white',
            fontWeight: 'bold'
          }} onPress={() => {navigation.navigate('RecSenha')}}>Recuperar Senha</Text>
        </View>

        <View>
          <Text style={{
            color: 'white',
            fontWeight: 'bold'
          }} onPress={() => {navigation.navigate('HomeScreen')}}>Cadastrar-se</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#003f5c',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 200,
    },
    logo: {
      fontWeight: 'bold',
      fontSize: 50,
      color: '#00c3ff',
      marginBottom: 35,
    },
    inputView: {
      width: '80%',
      backgroundColor: '#465881',
      borderRadius: 25,
      height: 50,
      marginBottom: 20,
      justifyContent: 'center',
      padding: 25,
    },
    inputText: {
      height: 50,
      color: 'white',
    },
    loginBtn: {
      width: '80%',
      backgroundColor: '#00c3ff',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    loginText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });