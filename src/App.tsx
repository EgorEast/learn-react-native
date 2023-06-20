import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './components/Header';
import Categories from './components/Categories';
import Popular from './components/Popular';
import { COLORS } from './constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: COLORS.black,
  },
});

const App = () => (
  <SafeAreaView style={styles.container}>
    <Header />
    <ScrollView>
      <Categories />
      <Popular />
    </ScrollView>
  </SafeAreaView>
);

export default App;
