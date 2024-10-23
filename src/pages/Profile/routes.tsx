import { NavLink } from 'src/components/Breadcrumbs';

import Profile from './Profile';
import InformationForm from './components/InformationForm';
import PasswordForm from './components/PasswordForm';

export const profileRoutes = [
  {
    path: 'profile',
    element: <Profile />,
    handle: {
      crumb: () => <NavLink to="/profile">Profile</NavLink>,
    },

    children: [
      {
        path: 'information',
        element: <InformationForm />,
        handle: {
          crumb: () => <NavLink to="/profile/information">Information</NavLink>,
        },
      },
      {
        path: 'password',
        element: <PasswordForm />,
        handle: {
          crumb: () => <NavLink to="/profile/password">Password</NavLink>,
        },
      },
    ],
  },
];
