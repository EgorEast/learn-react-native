import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Categories from './components/Categories';
import Popular from './components/Popular';
import { COLORS } from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 50,
    backgroundColor: COLORS.black,
  },
});

const App = () => (
  <View style={styles.container}>
    <Header />
    <ScrollView>
      <Categories />
      <Popular />
    </ScrollView>
  </View>
);

export default App;
