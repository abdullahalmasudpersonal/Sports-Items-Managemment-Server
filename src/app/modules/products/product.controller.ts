import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PorductServices } from './product.service';
import AppError from '../../errors/AppError';

const createProduct = catchAsync(async (req, res) => {
  try {
    const productData = req.body;
    const result = await PorductServices.createProductIntoDB(productData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Product Created successfully',
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

const getAllProduct = catchAsync(async (req, res) => {
  try {
    const result = await PorductServices.getAllProductIntoDB();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Products retrived successfully',
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

const getSingleProduct = catchAsync(async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await PorductServices.getSingleProductIntoDB(productId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single products retrived successfully',
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

const deleteSingleProduct = catchAsync(async (req, res) => {
  try {
    const { productId } = req.params;
    const result = await PorductServices.deleteSingleProductIntoDB(productId);

    /* if (!result === true) {
      throw new AppError(httpStatus.NOT_FOUND, "User dose't found!!");
    } */

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Delete single product successfully',
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

const updateSingleProduct = catchAsync(async (req, res) => {
  try {
    const { productId } = req.params;
    const productData = req.body;
    const result = await PorductServices.updateSingleProductIntoDB(
      productId,
      productData,
    );
    if (!result) {
      throw new AppError(httpStatus.NOT_FOUND, 'Product not found');
    }

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Single products updated successfully',
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

export const ProductControllers = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteSingleProduct,
  updateSingleProduct,
};
