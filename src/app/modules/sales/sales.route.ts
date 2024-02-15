import { Router } from 'express';
import { SalesProductController } from './sales.controller';

const router = Router();

router.post('/', SalesProductController.createSalesProduct);

router.get('/', SalesProductController.getAllSalesProduct);

export const SalesProductRoutes = router;
