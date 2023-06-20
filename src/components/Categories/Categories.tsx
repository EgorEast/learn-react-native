import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { categories } from '../../categories';
import CategoryItem from './components/CategoryItem';
import { COLORS, SIZES } from '../../constants';

const styles = StyleSheet.create({
  container: { paddingTop: 60 },
  textFirst: {
    fontSize: SIZES.h1,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  textSecond: {
    fontSize: SIZES.h1,
    color: COLORS.white,
  },
  list: {
    marginTop: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

const Categories = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const setItemAsSelected = (index: number) => {
    setSelectedItemIndex(index);
  };
  const resetSelectedItemIndex = () => {
    setSelectedItemIndex(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textFirst}>Hey,</Text>
      <Text style={styles.textSecond}>what's up?</Text>
      <View style={styles.list}>
        {categories.map((props, index) => (
          <CategoryItem
            key={`CategoryItem-${index}`}
            index={index}
            selectedItemIndex={selectedItemIndex}
            setItemAsSelected={setItemAsSelected}
            resetSelectedItemIndex={resetSelectedItemIndex}
            {...props}
          />
        ))}
      </View>
    </View>
  );
};
export default Categories;
