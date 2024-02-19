import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductIntoDB = async (productData: TProduct) => {
  if (await Product.isProductExistsByName(productData.name)) {
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'Porduct alrady exists!!',
    );
  }

  const result = await Product.create(productData);
  return result;
};

const getAllProductIntoDB = async () => {
  
  const result = await Product.find().sort({ createdAt: -1 });
  return result;
};

const getSingleProductIntoDB = async (productId: string) => {
  const result = await Product.findById(productId);
  return result;
};

const deleteSingleProductIntoDB = async (_id: string) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const result = await Product.updateOne({ _id }, { isDeleted: true });

  const updateProdcuted = await Product.findOne({ _id });
  return updateProdcuted;
};

const updateSingleProductIntoDB = async (
  _id: string,
  productData: TProduct,
) => {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const result = await Product.updateOne({ _id }, productData);

  const updateProdcuted = await Product.findOne({ _id });
  return updateProdcuted;
};

export const PorductServices = {
  createProductIntoDB,
  getAllProductIntoDB,
  getSingleProductIntoDB,
  deleteSingleProductIntoDB,
  updateSingleProductIntoDB,
};
