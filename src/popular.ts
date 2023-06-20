import { PopularItemProps } from './components/Popular/components/PopularItem/PopularItem.model';
import { IMAGES } from './constants';

export const popular: PopularItemProps[] = [
  { image: IMAGES.bigMac, name: 'Big Mac', price: '$ 3.39' },
  { image: IMAGES.quarterPounder, name: 'Quarter Pounder', price: '$ 3.79' },
  { image: IMAGES.cheeseburger, name: 'Cheeseburger', price: '$ 3.39' },
  { image: IMAGES.crispyChicken, name: 'Crispy Chicken', price: '$ 2.39' },
  { image: IMAGES.sausageBurrito, name: 'Sausage Burrito', price: '$ 2.49' },
  { image: IMAGES.filetOFish, name: 'Filet-o-fish', price: '$ 1.39' },
];
