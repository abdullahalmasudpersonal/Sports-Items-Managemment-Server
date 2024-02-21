import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BranchManagerServices } from './branchManager.service';

const getAllBranchManager = catchAsync(async (req, res) => {
  try {
    const result = await BranchManagerServices.getAllBranchManagerIntoDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Branch manager retrived successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
});

export const BranchManagerControllers = {
  getAllBranchManager,
};
