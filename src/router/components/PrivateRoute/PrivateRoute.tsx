import { PropsWithChildren } from 'react';

import { Navigate } from 'react-router-dom';

import CircularProgress from '@mui/material/CircularProgress';

function PrivateRoute({ children }: PropsWithChildren) {
  const isAuthenticated = true;
  const isLoaded = true;
  const isLoading = false;

  // useEffect(() => {
  //   const checkAuthentication = async () => {
  //     const isAuthenticated = await checkIsAuthenticated();

  //     if (!isAuthenticated) {
  //       navigate('/login');
  //     }
  //   };

  //   checkAuthentication();
  // }, [navigate]);

  if (isLoading || !isLoaded) {
    return (
      <div className="flex justify-center items-center width h-screen w-screen">
        <CircularProgress size="large" />
      </div>
    );
  }

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
}

export default PrivateRoute;
