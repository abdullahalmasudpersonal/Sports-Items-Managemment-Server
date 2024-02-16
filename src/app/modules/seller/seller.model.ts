import { Schema, model } from 'mongoose';
import { SellerModel, TSeller, TSellerName } from './seller.interface';

const userNameSchema = new Schema<TSellerName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});

const sellerSchema = new Schema<TSeller, SellerModel>(
  {
    userId: {
      type: String,
      required: [true, 'UserId is required'],
      unique: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'User is required'],
      unique: true,
      ref: 'User',
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
    },
    name: {
      type: userNameSchema,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'UserId is required'],
      unique: true,
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: '{VALUE} is not a valid gender',
      },
      required: [true, 'Gender is required'],
    },
    bloodGroup: {
      type: String,
      enum: {
        values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        message: '{VALUE} is not a valid blood group',
      },
    },
    contactNo: { type: Number, required: [true, 'Contact number is required'] },
    presentAddress: {
      type: String,
      required: [true, 'Present address is required'],
    },
    permanetAddress: {
      type: String,
      required: [true, 'Present address is required'],
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

export const Seller = model<TSeller, SellerModel>('Seller', sellerSchema);
