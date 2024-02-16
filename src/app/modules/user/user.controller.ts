import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';

const registerUser = catchAsync(async (req, res) => {
  try {
    /*     const userData = req.body;
    console.log(req.body);
    const { result, refreshToken, accessToken } =
      await UserServices.registerUserIntoDB(userData);

    res.cookie('refreshToken', refreshToken, {
      secure: config.NODE_ENV === 'production',
      httpOnly: true,
    });

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User registered successfully',
      data: {
        _id: result?._id,
        userId: result?.userId,
        username: result?.username,
        email: result?.email,
        role: result?.role,
        accessToken,
      },
    }); */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
});

const createSeller = catchAsync(async (req, res) => {
  try {
    const { password, seller: sellerData } = req.body;
    const result = await UserServices.createSellerIntoDB(password, sellerData);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Seller registered successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
});

const createBranchManager = catchAsync(async (req, res) => {
  try {
    const { password, branchManager: branchManagerData } = req.body;
    const result = await UserServices.createBranchManagerIntoDB(
      password,
      branchManagerData,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Branch manager registered successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
});

export const UserControllers = {
  registerUser,
  createSeller,
  createBranchManager,
};
