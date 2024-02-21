import { Model, Types } from 'mongoose';

export interface TsalesProduct {
  seller: Types.ObjectId;
  name: string;
  branch: string;
  brand: string;
  size: string;
  price: number;
  code: string;
  buyer: string;
  date: Date;
  quantity: number;
}
export interface SalesProductModel extends Model<TsalesProduct> {}
