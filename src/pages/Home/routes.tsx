import { Navigate } from 'react-router-dom';

import { NavLink } from 'src/components/Breadcrumbs';
import PrivateRoute from 'src/router/components/PrivateRoute';
import PrivateLayout from 'src/layouts/PrivateLayout';
import ErrorPage from 'src/pages/Error';
import { tasksRoutes } from 'src/pages/Tasks';
import { profileRoutes } from 'src/pages/Profile';
import { settingsRoutes } from 'src/pages/Settings';

export const homeRoutes = [
  {
    path: '/',

    element: (
      <PrivateRoute>
        <PrivateLayout />
      </PrivateRoute>
    ),

    handle: {
      crumb: () => <NavLink to="/">Home</NavLink>,
    },

    children: [
      {
        index: true,
        element: <Navigate to="tasks" />,
      },

      ...tasksRoutes,
      ...profileRoutes,
      ...settingsRoutes,
    ],

    errorElement: <ErrorPage />,
  },
];
