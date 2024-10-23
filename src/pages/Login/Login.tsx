import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import GuestForm from './components/GuestForm';
import LoginForm from './components/LoginForm';

function Login() {
  return (
    <Paper
      elevation={0}
      sx={{ maxWidth: 400, marginInline: 'auto', marginTop: 8, p: 6 }}
    >
      <GuestForm />
      <Typography
        noWrap
        variant="subtitle1"
        align="center"
        sx={{ paddingTop: 3, paddingBottom: 3, fontWeight: 600 }}
      >
        OR
      </Typography>
      <LoginForm />
    </Paper>
  );
}

export default Login;
