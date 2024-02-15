import httpStatus from 'http-status';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateAdminId, generateSalesManId } from './user.utils';
import { createToken } from '../auth/auth.utils';
import config from '../../config';
import AppError from '../../errors/AppError';

const registerUserIntoDB = async (userData: TUser) => {
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
};

export const UserServices = {
  registerUserIntoDB,
};
