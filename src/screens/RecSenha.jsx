import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RecSenha = () => {
  const [email, setEmail] = useState('');

  const handleRecovery = () => {
    console.log('Email for recovery:', email);
    
  };

  return (
    <View className="container">
      <Text>Recuperação de Senha</Text>
      <TextInput
        type="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button title='Recuperar senha' onClick={handleRecovery}></Button>
    </View>
  );
};

export default RecSenha;