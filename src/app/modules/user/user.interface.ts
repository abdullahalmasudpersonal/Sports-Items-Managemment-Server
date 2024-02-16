import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUser {
  userId: string;
  username: string;
  email: string;
  password: string;
  role: 'superAdmin' | 'admin' | 'branchManager' | 'seller';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  isUserExistsByUsername(username: string): Promise<TUser | null>;
}

export type TUserRole = keyof typeof USER_ROLE;
