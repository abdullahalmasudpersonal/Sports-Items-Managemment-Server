import { Model } from 'mongoose';

export interface TsalesProduct {
  name: string;
  buyer: string;
  quantity: number;
}
export interface SalesProductModel extends Model<TsalesProduct> {}
