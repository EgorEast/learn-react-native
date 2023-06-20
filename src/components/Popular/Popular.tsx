import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { popular } from '../../popular';
import ProductItem from './components/ProductItem';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: { paddingTop: 20 },
  textFirst: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.white,
  },

  list: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

const Popular = () => (
  <View style={styles.container}>
    <Text style={styles.textFirst}>Popular</Text>
    <View style={styles.list}>
      {popular.map((props, index) => (
        <ProductItem key={`PopularItem-${index}`} {...props} />
      ))}
    </View>
  </View>
);
export default Popular;
