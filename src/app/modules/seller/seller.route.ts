import { Router } from 'express';
import { SellerControllers } from './seller.controller';

const router = Router();

router.post('/create-seller', SellerControllers.createSeller);

export const SellerRoutes = router;
