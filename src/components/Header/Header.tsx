import { Link as RouterLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';

import Menu from 'src/components/Menu';
import ThemeSwitcher from 'src/components/ThemeSwitcher';

function Header() {
  return (
    <AppBar
      enableColorOnDark
      position="fixed"
      sx={{ borderRadius: 0, zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar component={Container} maxWidth="md">
        <Box sx={{ flexGrow: 1 }}>
          <Link
            component={RouterLink}
            to="/"
            color="inherit"
            underline="none"
            sx={{ fontSize: 20, fontWeight: 900 }}
          >
            DEMO
          </Link>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ mr: 2 }}>
            <ThemeSwitcher />
          </Box>
          <Menu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
