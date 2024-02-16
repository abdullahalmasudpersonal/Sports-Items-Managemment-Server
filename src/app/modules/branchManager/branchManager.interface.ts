import { Model, Types } from 'mongoose';

export interface TBranchManagerName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface TBranchManager {
  userId: string;
  user: Types.ObjectId;
  username: string;
  name: TBranchManagerName;
  email: string;
  gender: 'male' | 'female' | 'other';
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  contactNo: number;
  presentAddress: string;
  permanetAddress: string;
  profileImg?: string;
  isDeleted: boolean;
}

export interface BranchManagerModel extends Model<TBranchManager> {
  isBranchManagerExistsByUsername(
    // eslint-disable-next-line no-unused-vars
    username: string,
  ): Promise<TBranchManager | null>;
}
