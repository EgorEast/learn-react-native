import { FC } from 'react';
import { CategoryItemGeneralProps } from '../../../Categories/components/CategoryItem/CategoryItem.model';

export interface ProductItemProps extends CategoryItemGeneralProps {
  price: string;
}

export type ProductItem = FC<ProductItemProps>;
