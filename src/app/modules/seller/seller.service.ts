import { Seller } from './seller.model';

const createSellerIntoDB = async (seller: string) => {
  const result = await Seller.create(seller);
  return result;
};

export const SellerServices = {
  createSellerIntoDB,
};
