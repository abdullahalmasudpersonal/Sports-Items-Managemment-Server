import { TsalesProduct } from './sales.interface';
import { SalesProduct } from './sales.model';

const createSalesProductIntoDB = async (salseData: TsalesProduct) => {
  const result = await SalesProduct.create(salseData);
  return result;
};

const getAllSalesProductIntoDB = async () => {
  const result = await SalesProduct.find() /* .sort({ date: -1 }) */
    .populate('seller');
  return result;
};

export const SalesProductServices = {
  createSalesProductIntoDB,
  getAllSalesProductIntoDB,
};
