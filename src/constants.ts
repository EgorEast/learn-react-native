export const COLORS = {
  primary: '#f2ca46',
  secondary: '#ee1c0e',

  white: '#fcfcfc',
  black: '#000000',
  gray: '#111111',
} as const;

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 20,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
} as const;

const appTheme = { COLORS, SIZES } as const;

export default appTheme;

export const IMAGES = {
  macdonaldsLogo: require('./assets/macdonalds-logo.png'),
  shoppingCart: require('./assets/shoppingCart.png'),

  comboMeal: require('./assets/combo-meal.png'),
  burgersSandwiches: require('./assets/burger.png'),
  happyMeal: require('./assets/happy-meal-png_8210476.png'),
  beverages: require('./assets/Beverages.png'),
  chicken: require('./assets/mcdonald-s-chicken-mcnuggets-chicken-nugget-french-fries-nuggets-ccf5e76f96be245616f61b7e9b9cd575.png'),
  snacksSlides: require('./assets/snacks.png'),

  bigMac: require('./assets/bigMac.png'),
  quarterPounder: require('./assets/quarterPounder.png'),
  cheeseburger: require('./assets/cheeseburger.png'),
  crispyChicken: require('./assets/crispyChicken.png'),
  sausageBurrito: require('./assets/sausageBurrito.png'),
  filetOFish: require('./assets/filetOFish.png'),
} as const;
