import { CategoryItemGeneralProps } from './components/Categories/components/CategoryItem/CategoryItem.model';
import { IMAGES } from './constants';

export const categories: CategoryItemGeneralProps[] = [
  { image: IMAGES.comboMeal, name: 'Combo Meal' },
  { image: IMAGES.burgersSandwiches, name: 'Burgers & Sandwiches' },
  { image: IMAGES.happyMeal, name: 'Happy Meal' },
  { image: IMAGES.beverages, name: 'Beverages' },
  { image: IMAGES.chicken, name: 'Chicken' },
  { image: IMAGES.snacksSlides, name: 'Snacks & Slides' },
];
