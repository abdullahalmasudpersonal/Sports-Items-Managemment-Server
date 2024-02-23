import { TsalesProduct } from './sales.interface';
import { SalesProduct } from './sales.model';

const createSalesProductIntoDB = async (salseData: TsalesProduct) => {
  const result = await SalesProduct.create(salseData);
  return result;
};

const getAllSalesProductIntoDB = async () => {
  const result = await SalesProduct.find()
    .sort({ date: -1 })
    .populate('seller');
  return result;
};

const getMySalesProductIntoDB = async (
  _id: string,
  userId: string,
  role: string,
) => {
  console.log(_id, userId, role);

  const result = await SalesProduct.find({ seller: _id });
  // console.log(result);
  return result;
};

export const SalesProductServices = {
  createSalesProductIntoDB,
  getAllSalesProductIntoDB,
  getMySalesProductIntoDB,
};
