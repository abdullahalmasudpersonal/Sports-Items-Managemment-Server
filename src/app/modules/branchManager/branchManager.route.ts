import { Router } from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import { BranchManagerControllers } from './branchManager.controller';

const router = Router();

router.get(
  '/',
  auth(USER_ROLE.superAdmin),
  BranchManagerControllers.getAllBranchManager,
);

export const BranchManagerRoutes = router;
