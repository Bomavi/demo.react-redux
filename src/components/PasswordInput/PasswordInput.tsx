import { useState } from 'react';

import { Icon } from '@mdi/react';
import { mdiEye, mdiEyeOff } from '@mdi/js';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Tooltip from '@mui/material/Tooltip';

import Input from 'src/components/Input';
import type { InputProps } from 'src/components/Input';

function PasswordInput(props: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const passwordVisibilityTooltip = showPassword
    ? 'Hide password'
    : 'Show password';

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Input
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Tooltip title={passwordVisibilityTooltip}>
              <IconButton
                aria-label="toggle password visibility"
                edge="end"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                <Icon path={showPassword ? mdiEyeOff : mdiEye} size={1} />
              </IconButton>
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordInput;
