import { MouseEvent, useState } from 'react';

import { Icon } from '@mdi/react';
import {
  mdiAccountCircleOutline,
  mdiCogOutline,
  mdiLocationExit,
} from '@mdi/js';

import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import MuiMenu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';

import MenuItem from './components/MenuItem';

function Menu() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Tooltip title="Menu">
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuClick}
        >
          <Icon path={mdiAccountCircleOutline} size={1} />
        </IconButton>
      </Tooltip>
      <MuiMenu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 0.5,
              minWidth: 160,
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 18,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        onClick={handleMenuClose}
        onClose={handleMenuClose}
      >
        <MenuItem
          to="/profile"
          icon={<Icon path={mdiAccountCircleOutline} size={1} />}
          onClick={handleMenuClose}
        >
          Profile
        </MenuItem>
        <MenuItem
          to="/settings"
          icon={<Icon path={mdiCogOutline} size={1} />}
          onClick={handleMenuClose}
        >
          Settings
        </MenuItem>
        <Divider sx={{ marginY: 1 }} />
        <MenuItem
          to="/logout"
          icon={<Icon path={mdiLocationExit} size={1} />}
          onClick={handleMenuClose}
        >
          Logout
        </MenuItem>
      </MuiMenu>
    </>
  );
}

export default Menu;
