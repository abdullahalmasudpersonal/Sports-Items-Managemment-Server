import httpStatus from 'http-status';
import { TUser } from './user.interface';
import { generateBranchManagerId, generateSellerId } from './user.utils';
import config from '../../config';
import AppError from '../../errors/AppError';
import { TSeller } from '../seller/seller.interface';
import { Seller } from '../seller/seller.model';
import mongoose from 'mongoose';
import { User } from './user.model';
import { BranchManager } from '../branchManager/branchManager.model';

/* const registerUserIntoDB = async (userData: TUser) => {
  if (await User.isUserExistsByUsername(userData.username)) {
    throw new AppError(httpStatus.INTERNAL_SERVER_ERROR, 'User alrady Exists');
  }

     if (userData.role === 'admin') {
    userData.userId = await generateAdminId();
  } else {
    userData.userId = await generateSalesManId();
  } 

  const result = await User.create(userData);

  const user = await User.isUserExistsByUsername(userData.username);
  const jwtPayload = {
    userId: user?.userId,
    username: user?.username,
    role: user?.role,
    email: user?.email,
  } as TUser;

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );
  return { result, accessToken, refreshToken };
}; */

const createSellerIntoDB = async (password: string, payload: TSeller) => {
  if (await Seller.isSellerExistsByUsername(payload.username)) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Seller alrady exists!',
    );
  }

  const sellerData: Partial<TUser> = {};

  sellerData.password = password || (config.default_password as string);

  //set seller role
  sellerData.role = 'seller';
  // set seller username & email
  sellerData.username = payload.username;
  sellerData.email = payload.email;

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    sellerData.userId = await generateSellerId();

    // create a user (transaction-1)
    const newUser = await User.create([sellerData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // set id , _id as user
    payload.userId = newUser[0].userId;
    payload.user = newUser[0]._id; //reference _id

    // create a Seller (transaction-2)
    const newSeller = await Seller.create([payload], { session });
    if (!newSeller.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create seller');
    }

    await session.commitTransaction();
    await session.endSession();

    return newSeller;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

const createBranchManagerIntoDB = async (
  password: string,
  payload: TSeller,
) => {
  if (await BranchManager.isBranchManagerExistsByUsername(payload.username)) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'This branch manager alrady exists!',
    );
  }

  const branchManagerData: Partial<TUser> = {};

  branchManagerData.password = password || (config.default_password as string);

  branchManagerData.role = 'branchManager';
  branchManagerData.username = payload.username;
  branchManagerData.email = payload.email;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    branchManagerData.userId = await generateBranchManagerId();

    // create a user (transaction-1)
    const newUser = await User.create([branchManagerData], { session });
    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to create user');
    }

    // set id , _id as user
    payload.userId = newUser[0].userId;
    payload.user = newUser[0]._id; //reference _id

    // create a BranchManager (transaction-2)
    const newBranchManager = await BranchManager.create([payload], { session });
    if (!newBranchManager.length) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'Failed to create branch manager',
      );
    }

    await session.commitTransaction();
    await session.endSession();

    return newBranchManager;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(err);
  }
};

export const UserServices = {
  createSellerIntoDB,
  createBranchManagerIntoDB,
};
