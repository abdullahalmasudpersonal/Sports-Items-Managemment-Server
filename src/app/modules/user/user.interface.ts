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
  // eslint-disable-next-line no-unused-vars
  isUserExistsByUsername(username: string): Promise<TUser | null>;
  isPasswordMatched(
    // eslint-disable-next-line no-unused-vars
    plainTextPassword: string,
    // eslint-disable-next-line no-unused-vars
    hashedPassword: string,
  ): Promise<boolean>;
}

export type TUserRole = keyof typeof USER_ROLE;
