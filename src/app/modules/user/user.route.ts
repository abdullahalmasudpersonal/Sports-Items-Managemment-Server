import { Router } from 'express';
import { UserControllers } from './user.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';

const router = Router();

router.post(
  '/create-seller',
  auth(USER_ROLE.superAdmin),
  UserControllers.createSeller,
);

router.post(
  '/create-branchManager',
  auth(USER_ROLE.superAdmin),
  UserControllers.createBranchManager,
);

router.post('/create-user', UserControllers.registerUser);

export const UserRoutes = router;
