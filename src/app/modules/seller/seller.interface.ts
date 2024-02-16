import { Model, Types } from 'mongoose';

export interface TSellerName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface TSeller {
  userId: string;
  user: Types.ObjectId;
  username: string;
  name: TSellerName;
  email: string;
  gender: 'male' | 'female' | 'other';
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNo: number;
  presentAddress: string;
  permanetAddress: string;
  profileImg?: string;
  isDeleted: boolean;
}

export interface SellerModel extends Model<TSeller> {}
