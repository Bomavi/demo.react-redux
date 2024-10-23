import { ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

interface Props {
  children?: ReactNode;
}

function PublicLayout({ children }: Props) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Header />
      <Toolbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
        {children}
      </Box>
      <Footer />
    </Box>
  );
}

export default PublicLayout;
