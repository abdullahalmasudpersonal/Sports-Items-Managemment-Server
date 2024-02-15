import { Model } from 'mongoose';

export interface TProduct {
  name: string;
  category: string;
  code: string;
  price: number;
  quantity: number;
  status: string;
  brand: string;
  features: string;
  description: string;
  productImg: string;
  isDeleted: boolean;
}

export interface ProductModel extends Model<TProduct> {
  // eslint-disable-next-line no-unused-vars
  isProductExistsByName(name: string): Promise<TProduct | null>;
}
