import { Schema, model } from 'mongoose';
import { SalesProductModel, TsalesProduct } from './sales.interface';

const salesProductSchema = new Schema<TsalesProduct, TsalesProduct>(
  {
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    invoice: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    code: {
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
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

export const SalesProduct = model<TsalesProduct, SalesProductModel>(
  'SalesProduct',
  salesProductSchema,
);
