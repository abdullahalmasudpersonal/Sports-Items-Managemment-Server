import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { SalesProductServices } from './sales.service';

const createSalesProduct = catchAsync(async (req, res) => {
  try {
    const salseData = req.body;
    const result =
      await SalesProductServices.createSalesProductIntoDB(salseData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product Sales successfully',
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

const getAllSalesProduct = catchAsync(async (req, res) => {
  try {
    const result = await SalesProductServices.getAllSalesProductIntoDB();

    /// Importent code
    //const re = result.map((res) => res.seller);
    // const ress = re.map((rs) => rs._id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Get all sales product successfully',
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

const getMySales = catchAsync(async (req, res) => {
  try {
    const { _id } = req.user;
    const result = await SalesProductServices.getMySalesProductIntoDB(_id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: `Get my sales product successfully${result.length}`,
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

export const SalesProductController = {
  createSalesProduct,
  getAllSalesProduct,
  getMySales,
};
