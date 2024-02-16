import { Router } from 'express';
import { UserControllers } from './user.controller';

const router = Router();

router.post('/create-seller', UserControllers.createSeller);

router.post('/create-branchManager', UserControllers.createBranchManager);

router.post('/create-user', UserControllers.registerUser);

export const UserRoutes = router;
