import { TsalesProduct } from './sales.interface';
import { SalesProduct } from './sales.model';
import { generateSalesInvoiceNumber } from './sales.utils';

const createSalesProductIntoDB = async (salseData: TsalesProduct) => {
  salseData.invoice = await generateSalesInvoiceNumber();
  // console.log(salseData);
  //  console.log(salseData.invoice);
  const result = await SalesProduct.create(salseData);
  return result;
};

const getAllSalesProductIntoDB = async () => {
  const result = await SalesProduct.find()
    .sort({ date: -1 })
    .populate('seller');
  return result;
};

const getMySalesProductIntoDB = async (_id: string) => {
  const result = await SalesProduct.find({ seller: _id });
  return result;
};

export const SalesProductServices = {
  createSalesProductIntoDB,
  getAllSalesProductIntoDB,
  getMySalesProductIntoDB,
};
