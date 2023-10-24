import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const PainelAdmin = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <View>
      <Text>Painel Admin</Text>
      <TextInput
        placeholder="Novo Item"
        value={newItem}
        onChangeText={text => setNewItem(text)}
      />
      <Button title="Adicionar Item" onPress={addItem} />
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default PainelAdmin;
