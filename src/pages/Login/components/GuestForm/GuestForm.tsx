import Icon from '@mdi/react';
import { mdiSecurity } from '@mdi/js';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function GuestForm() {
  const handleLogin = () => {
    // this.props.login({ isGuest: true });
  };

  return (
    <Box>
      <Typography
        noWrap
        variant="subtitle1"
        align="center"
        sx={{ marginBottom: 2, textTransform: 'uppercase', fontWeight: 600 }}
      >
        Use Guest Access
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 2,
          marginBottom: 1,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Icon path={mdiSecurity} size={1} />}
          sx={{ height: 46, marginTop: 1 }}
          onClick={handleLogin}
        >
          <span style={{ marginTop: 2 }}>Get access</span>
        </Button>
      </Box>
    </Box>
  );
}

export default GuestForm;
