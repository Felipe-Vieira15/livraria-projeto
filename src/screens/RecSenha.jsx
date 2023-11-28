import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function RecSenha({navigation}) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    console.log('Current Password:', currentPassword);
    console.log('New Password:', newPassword);
    console.log('Confirm New Password:', confirmNewPassword);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Alterar Senha</Text>
      <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Senha Atual..."
        placeholderTextColor="#011824"
        secureTextEntry
        value={currentPassword}
        onChangeText={(text) => setCurrentPassword(text)}
      />

      </View>
      <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Nova Senha..."
        placeholderTextColor="#011824"
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />

      </View>
      <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder="Confirmar Nova Senha..."
        placeholderTextColor="#011824"
        secureTextEntry
        value={confirmNewPassword}
        onChangeText={(text) => setConfirmNewPassword(text)}
      />
      <TouchableOpacity style={styles.RecSenhaBtn} onPress={handleChangePassword}>
        <Text styTouchableOpacityle={styles.RecSenhaText}>Entrar</Text>
      </TouchableOpacity>
      <View style={{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
     </View>
    </View>
   </View>
  );
};

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
});
