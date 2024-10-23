import { useEffect } from 'react';

import { Outlet, useMatch, useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';

import PageContent from 'src/components/PageContent';

import NavTabs from './components/NavTabs';

function Profile() {
  const navigate = useNavigate();
  const matchResult = useMatch('/profile');
  const isProfileRootPage = Boolean(matchResult);

  useEffect(() => {
    if (isProfileRootPage) {
      navigate('/profile/information');
    }
  }, [isProfileRootPage]);

  return (
    <PageContent title="Profile" tabBar={<NavTabs />}>
      <Box sx={{ mt: 3 }}>
        <Outlet />
      </Box>
    </PageContent>
  );
}

export default Profile;
