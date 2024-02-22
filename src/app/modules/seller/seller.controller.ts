import { SellerServices } from './seller.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const getAllSeller = catchAsync(async (req, res) => {
  try {
    const result = await SellerServices.getAllSellerIntoDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Seller retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});

export const SellerControllers = {
  getAllSeller,
};
