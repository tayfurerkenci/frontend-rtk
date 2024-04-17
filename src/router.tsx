import { createBrowserRouter, DataRouteObject, RouteObject } from 'react-router-dom';
import { FC } from 'react';

type RouteConfig = DataRouteObject & {
  lazy?: () => Promise<{ default: FC<any> }>;
};


const routes: RouteObject[] = [
  {
    path: '/login',
    lazy: async () => {
      const { default: LoginPage } = await import('./pages/login');
      return { path: '/login', element: <LoginPage /> };
    }
  },
];

const router = createBrowserRouter(routes);
export const { navigate } = router;

export default router;
