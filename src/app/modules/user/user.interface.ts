import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export interface TUserName {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface TUser {
  userId: string;
  username: string;
  name: TUserName;
  email: string;
  password: string;
  role: 'superAdmin'|'admin' |'branchManager' |'seller';
  gender: 'male' | 'female' | 'other';
  contactNo: string;
  profileImg?: string;
  isDeleted: boolean;
}

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExistsByUsername(username: string): Promise<TUser | null>;
  /* isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>; */
}

export type TUserRole = keyof typeof USER_ROLE;
