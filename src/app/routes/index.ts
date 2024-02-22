import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { ProductRoutes } from '../modules/products/product.route';
import { SalesProductRoutes } from '../modules/sales/sales.route';
import { BranchManagerRoutes } from '../modules/branchManager/branchManager.route';
import { SellerRoutes } from '../modules/seller/seller.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/sales',
    route: SalesProductRoutes,
  },
  {
    path: '/branch-manager',
    route: BranchManagerRoutes,
  },
  {
    path: '/seller',
    route: SellerRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
