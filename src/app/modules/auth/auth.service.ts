import httpStatus from 'http-status';
//import AppError from '../../errors/appError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import config from '../../config';
import { createToken, verifyToken } from './auth.utils';
import AppError from '../../errors/AppError';

const loginUserInto = async (payload: TLoginUser) => {
  const user = await User.isUserExistsByUsername(payload.username);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !!!');
  }

  if (!(await User.isPasswordMatched(payload.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not match');

  const jwtPayload = {
    userId: user.userId,
    username: user?.username,
    role: user.role,
    email: user.email,
  };

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

  return { user, accessToken, refreshToken };
};

const refreshToken = async (token: string) => {
  const decoded = verifyToken(token, config.jwt_refresh_secret as string);
  const { username } = decoded;
  const user = await User.isUserExistsByUsername(username);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !!!');
  }

  const jwtPayload = {
    userId: user.userId,
    username: user?.username,
    role: user.role,
    email: user.email,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
  };
};

export const authServices = {
  loginUserInto,
  refreshToken,
};
