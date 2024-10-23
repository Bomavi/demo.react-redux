import PublicLayout from 'src/layouts/PublicLayout';
// import ErrorPage from 'src/pages/Error';

import LoginPage from './Login';

export const loginRoutes = [
  {
    path: '/login',

    element: (
      <PublicLayout>
        <LoginPage />
      </PublicLayout>
    ),

    // errorElement: <ErrorPage />,
  },
];
