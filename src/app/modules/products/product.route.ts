import { Router } from 'express';
import { ProductControllers } from './product.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = Router();

router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.branchManager),
  ProductControllers.getAllProduct,
);

router.get(
  '/:productId',
  auth(USER_ROLE.superAdmin, USER_ROLE.branchManager),
  ProductControllers.getSingleProduct,
);

router.put(
  '/delete/:productId',
  auth(USER_ROLE.superAdmin, USER_ROLE.branchManager),
  ProductControllers.deleteSingleProduct,
);

router.put(
  '/update/:productId',
  auth(USER_ROLE.superAdmin, USER_ROLE.branchManager),
  ProductControllers.updateSingleProduct,
);

router.post(
  '/create-product',
  auth(USER_ROLE.superAdmin, USER_ROLE.branchManager),
  ProductControllers.createProduct,
);

export const ProductRoutes = router;
