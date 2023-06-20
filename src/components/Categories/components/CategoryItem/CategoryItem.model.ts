import { FC } from 'react';
import { ImageSourcePropType } from 'react-native';

export interface CategoryItemGeneralProps {
  image: ImageSourcePropType;
  name: string;
}
export interface CategoryItemProps extends CategoryItemGeneralProps {
  index: number;
  selectedItemIndex?: number | null;
  setItemAsSelected?: (index: number) => void;
  resetSelectedItemIndex?: () => void;
}

export type CategoryItem = FC<CategoryItemProps>;
