import { useState } from 'react';

import Icon from '@mdi/react';
import { mdiLocationEnter } from '@mdi/js';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Input from 'src/components/Input';
import PasswordInput from 'src/components/PasswordInput';

import LoginTabs from '../LoginTabs';

function LoginForm() {
  const [tabIndex, setTabIndex] = useState(0);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const isPasswordCorrect = password === repeatPassword;
  const isLoginReady = !!username && !!password;
  const isRegistrationReady = isLoginReady && isPasswordCorrect;

  /* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
  const handleTabClick = (_e: React.ChangeEvent<{}>, value: number) => {
    setTabIndex(value);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRepeatPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRepeatPassword(e.target.value);
  };

  const handleLogin = () => {
    if (isLoginReady) {
      // login({
      //     username,
      //     password,
      // });
    }
  };

  const handleRegistration = () => {
    if (isRegistrationReady) {
      // register({
      //     username,
      //     password,
      // });
    }
  };

  return (
    <Box>
      <LoginTabs tabIndex={tabIndex} onChange={handleTabClick} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: 2,
          marginBottom: 1,
        }}
      >
        <Box sx={{ paddingBottom: 2 }}>
          <Input
            fullWidth
            label="Username"
            autoComplete="off"
            margin="normal"
            value={username}
            onChange={handleUsernameChange}
          />
        </Box>
        <Box sx={{ paddingBottom: 2 }}>
          <PasswordInput
            fullWidth
            label="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Box>
        {tabIndex === 0 && (
          <Button
            variant="contained"
            startIcon={<Icon path={mdiLocationEnter} size={1} />}
            sx={{ height: 46, marginTop: 1 }}
            onClick={handleLogin}
          >
            <span style={{ marginTop: 2 }}>Login</span>
          </Button>
        )}
        {tabIndex === 1 && (
          <Box sx={{ marginTop: 1 }}>
            <Box sx={{ paddingBottom: 2 }}>
              <PasswordInput
                fullWidth
                label="Repeat Password"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
              />
            </Box>
            <Button
              fullWidth
              variant="contained"
              startIcon={<Icon path={mdiLocationEnter} size={1} />}
              sx={{ height: 46, marginTop: 1 }}
              onClick={handleRegistration}
            >
              <span style={{ marginTop: 2 }}>Register</span>
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default LoginForm;
