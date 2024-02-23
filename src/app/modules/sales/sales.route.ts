import { Router } from 'express';
import { SalesProductController } from './sales.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = Router();

router.post(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.branchManager, USER_ROLE.seller),
  SalesProductController.createSalesProduct,
);

router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.branchManager, USER_ROLE.seller),
  SalesProductController.getAllSalesProduct,
);
router.get(
  '/my-sales',
  auth(USER_ROLE.superAdmin, USER_ROLE.branchManager, USER_ROLE.seller),
  SalesProductController.getMySales,
);

export const SalesProductRoutes = router;
