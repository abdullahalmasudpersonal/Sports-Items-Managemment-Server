import { Schema, model } from 'mongoose';
import {
  BranchManagerModel,
  TBranchManager,
  TBranchManagerName,
} from './branchManager.interface';

const branchManagerNameSchema = new Schema<TBranchManagerName>({
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

const branchManagerSchema = new Schema<TBranchManager, BranchManagerModel>(
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
      type: branchManagerNameSchema,
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
    profileImg: {
      type: String,
      required: [false, ''],
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

branchManagerSchema.statics.isBranchManagerExistsByUsername = async function (
  username: string,
) {
  return await BranchManager.findOne({ username });
};

export const BranchManager = model<TBranchManager, BranchManagerModel>(
  'BranchManager',
  branchManagerSchema,
);
