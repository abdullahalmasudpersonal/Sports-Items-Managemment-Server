import { Types } from 'mongoose';
import { TsalesProduct } from './sales.interface';
import { SalesProduct } from './sales.model';
import {
  generateBMSalesInvoiceNumber,
  generateSASalesInvoiceNumber,
  generateSESalesInvoiceNumber,
} from './sales.utils';

const createSalesProductIntoDB = async (
  salseData: TsalesProduct,
  role: string,
  _id: Types.ObjectId,
) => {
  if (role === 'superAdmin') {
    salseData.invoice = await generateSASalesInvoiceNumber();
  }
  if (role === 'branchManager') {
    salseData.invoice = await generateBMSalesInvoiceNumber();
  }
  if (role === 'seller') {
    salseData.invoice = await generateSESalesInvoiceNumber();
  }

  salseData.seller = _id as Types.ObjectId;
  const result = await SalesProduct.create(salseData);
  return result;
};

const getAllSalesProductIntoDB = async () => {
  const result = await SalesProduct.find().sort({ date: -1 });
  /* .populate('seller') */ return result;
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
