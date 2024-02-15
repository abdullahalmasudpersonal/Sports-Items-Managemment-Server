import { Schema, model } from 'mongoose';
import { SalesProductModel, TsalesProduct } from './sales.interface';

const salesProductSchema = new Schema<TsalesProduct, TsalesProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    buyer: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const SalesProduct = model<TsalesProduct, SalesProductModel>(
  'SalesProduct',
  salesProductSchema,
);
