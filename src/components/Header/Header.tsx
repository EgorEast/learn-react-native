import React from 'react';
import { Image, Linking, StyleSheet, TouchableHighlight, View } from 'react-native';
import { IMAGES } from '../../constants';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    width: 51,
    height: 45,
    resizeMode: 'contain',
  },
  shoppingCart: {
    width: 51,
    height: 45,
    resizeMode: 'contain',
  },
});

const Header = () => (
  <View style={styles.container}>
    <TouchableHighlight
      onPress={() => {
        Linking.openURL('https://google.com');
      }}
    >
      <Image source={IMAGES.macdonaldsLogo} style={styles.logo} />
    </TouchableHighlight>
    <View>
      <Image source={IMAGES.shoppingCart} style={styles.shoppingCart} />
    </View>
  </View>
);

export default Header;
