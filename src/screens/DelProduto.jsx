import React from 'react';
import { View, Text, Button } from 'react-native';
// import firebase from './firebaseConfig';

const ProductDetail = ({ productId }) => {
  const handleDeleteProduct = () => {
    const productRef = firebase.database().ref('products').child(productId);
    productRef.remove()
      .then(() => {
        console.log('Produto excluído com sucesso');
      })
      .catch((error) => {
        console.error('Erro ao excluir o produto:', error);
      });
  };

  return (
    <View>
      <Text>Detalhes do Produto</Text>
      <Button title="Excluir Produto" onPress={handleDeleteProduct} />
    </View>
  );
};

export default ProductDetail;
