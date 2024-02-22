import { Seller } from './seller.model';

const getAllSellerIntoDB = async () => {
  const result = await Seller.find();
  return result;
};

export const SellerServices = {
  getAllSellerIntoDB,
};
