import { Schema, model } from 'mongoose';
import { ProductModel, TProduct } from './product.interface';

const productSchema = new Schema<TProduct, ProductModel>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      unique: false,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
      unique: false,
    },
    quantity: {
      type: Number,
      required: true,
      unique: false,
    },
    size: {
      type: String,
      required:true,
    },
    brand: {
      type: String,
      required: true,
      unique: false,
    },
    features: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
    productImg: {
      type: String,
      required: true,
      unique: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

productSchema.statics.isProductExistsByName = async function (name: string) {
  return await Product.findOne({ name });
};

productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } }, { quantity: { $gt: 0 } });
  next();
});

productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const Product = model<TProduct, ProductModel>('Product', productSchema);
