import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { CategoryItem as CategoryItemComponent } from './CategoryItem.model';
import { COLORS, SIZES } from '../../../../constants';

const styles = StyleSheet.create({
  categoryItem: {
    width: '30%',
    height: 100,
    marginBottom: 20,
    borderRadius: SIZES.radius,
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
  insideContainer: {
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: SIZES.h4,
    color: COLORS.white,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

const CategoryItem: CategoryItemComponent = ({
  image,
  name,
  index,
  selectedItemIndex,
  setItemAsSelected,
  resetSelectedItemIndex,
}) => {
  const isSelected = index === selectedItemIndex;
  const onPress = () => {
    if (isSelected) {
      resetSelectedItemIndex?.();
      return;
    }

    setItemAsSelected?.(index);
  };

  return (
    <TouchableHighlight
      style={{
        ...styles.categoryItem,
        backgroundColor: isSelected ? COLORS.secondary : COLORS.gray,
      }}
      underlayColor={COLORS.secondary}
      onPress={onPress}
    >
      <View style={styles.insideContainer}>
        <Image style={styles.image} source={image} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default CategoryItem;
