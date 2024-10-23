import { NavLink } from 'src/components/Breadcrumbs';

import Settings from './Settings';

export const settingsRoutes = [
  {
    path: 'settings',
    element: <Settings />,
    handle: {
      crumb: () => <NavLink to="/settings">Settings</NavLink>,
    },
  },
];
