import { NavLink } from 'src/components/Breadcrumbs';

import Tasks from './Tasks';

export const tasksRoutes = [
  {
    path: '/tasks',
    element: <Tasks />,
    handle: {
      crumb: () => <NavLink to="/tasks">Tasks</NavLink>,
    },
  },
];
