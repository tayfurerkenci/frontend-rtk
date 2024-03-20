import { ReactElement } from 'react';
import { createBrowserRouter } from 'react-router-dom';

type Route = {
  path: string;
  element: ReactElement;
  children?: Route[];
};

const routes: Route[] = [];

const router = createBrowserRouter(routes);

// Export the router and the navigate function
export const { navigate } = router;
export default router;
