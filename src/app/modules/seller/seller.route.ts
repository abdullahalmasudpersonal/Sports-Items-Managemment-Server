import { Router } from 'express';
import { SellerControllers } from './seller.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = Router();

router.get('/', auth(USER_ROLE.superAdmin), SellerControllers.getAllSeller);

export const SellerRoutes = router;
