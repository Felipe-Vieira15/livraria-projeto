import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App({navigation}) {
  const [newPassword, setNewPassword] = useState('');

  const handleRecSenha = () => {
    console.log('newPassword:', newPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Alterar Senha</Text>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Nova Senha..."
          placeholderTextColor="#011824"
          onChangeText={(text) => setNewPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.RecSenhaBtn} onPress={handleRecSenha}>
        <Text styTouchableOpacityle={styles.RecSenhaText}>Confirmar</Text>
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
            fontWeight: 'bold',
            fontFamily: 'Roboto',
          }} onPress={() => {navigation.navigate('Login')}}>Voltar</Text>
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
    RecSenhaBtn: {
      width: '80%',
      backgroundColor: '#00c3ff',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    RecSenhaText: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });