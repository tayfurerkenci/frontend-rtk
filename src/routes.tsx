import { lazy, FC } from 'react-router-dom';

// Type for Route definitions with optional lazy loading
type RouteConfig = {
  path: string;
  element: FC; // Function component for non-lazy routes
  lazy?: () => Promise<{ element: FC }>; // Lazy loading for dynamic imports
};

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));


const routes: RouteConfig[] = [
  {
    path: '/home',
    element: Home, // Lazy-loaded route (component assigned directly)
  },
  {
    path: '/login',
    element: Login, // Lazy-loaded route (component assigned directly)
  },
];

export default routes;
