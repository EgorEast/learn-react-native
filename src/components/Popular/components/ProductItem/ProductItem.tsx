import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ProductItem as ProductItemComponent } from './ProductItem.model';
import { COLORS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  categoryItem: {
    width: '30%',
    height: 120,
    marginBottom: 20,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    paddingHorizontal: 5,
    backgroundColor: COLORS.gray,
  },
  insideContainer: {
    alignItems: 'center',
  },
  name: {
    marginTop: 10,
    fontSize: SIZES.h4,
    color: COLORS.white,
    textAlign: 'center',
  },
  price: {
    marginTop: 10,
    fontSize: SIZES.h4,
    color: COLORS.primary,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

const ProductItem: ProductItemComponent = ({ image, name, price }) => {
  const a = 2;
  console.log(a);

  return (
    <TouchableHighlight
      style={styles.categoryItem}
      underlayColor={COLORS.secondary}
      onPress={() => {
        //
      }}
    >
      <View style={styles.insideContainer}>
        <Image style={styles.image} source={image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ProductItem;
