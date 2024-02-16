import { SellerServices } from './seller.service';
import catchAsync from '../../utils/catchAsync';

const createSeller = catchAsync(async (req, res) => {
  try {
    const sellerData = req.body;
    console.log(req.body);
    const result = await SellerServices.createSellerIntoDB(sellerData);
    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
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

export const SellerControllers = {
  createSeller,
};
