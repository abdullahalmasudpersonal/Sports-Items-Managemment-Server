import { Model } from 'mongoose';

export type TLoginUser = {
  username: string;
  password: string;
};

export interface AuthModel extends Model<TLoginUser> {}
