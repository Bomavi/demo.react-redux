import type { ReactNode } from 'react';

import { Outlet } from 'react-router-dom';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';

interface Props {
  children?: ReactNode;
}

function PrivateLayout({ children }: Props) {
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
        <Container maxWidth="md">
          <Outlet />
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default PrivateLayout;
