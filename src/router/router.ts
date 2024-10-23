import { createBrowserRouter } from 'react-router-dom';

import { loginRoutes } from 'src/pages/Login';
import { homeRoutes } from 'src/pages/Home';

export const router = createBrowserRouter([...loginRoutes, ...homeRoutes]);
