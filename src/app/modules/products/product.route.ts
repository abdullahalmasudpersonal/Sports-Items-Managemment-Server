import { Router } from 'express';
import { ProductControllers } from './product.controller';
import auth from '../../middlewares/auth';

const router = Router();

router.get('/', auth('admin'), ProductControllers.getAllProduct);

router.get('/:productId', ProductControllers.getSingleProduct);

router.put('/delete/:productId', ProductControllers.deleteSingleProduct);

router.put('/update/:productId', ProductControllers.updateSingleProduct);

router.post('/create-product', ProductControllers.createProduct);

export const ProductRoutes = router;
