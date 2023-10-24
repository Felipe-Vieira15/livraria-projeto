import React from 'react';
import { View, StyleSheet } from 'react-native';
import PainelAdmin from './PainelAdmin';

const App = () => {
  return (
    <View style={styles.container}>
      <PainelAdmin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
