import { Router } from 'express';
import { UserControllers } from './user.controller';

const router = Router();

router.post('/create-user', UserControllers.registerUser);

export const UserRoutes = router;
