import { Icon } from '@mdi/react';
import { mdiThemeLightDark } from '@mdi/js';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import { useThemeContext } from 'src/context/Theme';

function ThemeSwitcher() {
  const { theme, setTheme } = useThemeContext();

  const inversedTheme = theme === 'light' ? 'dark' : 'light';
  const tooltipTitle = `Switch to ${inversedTheme} theme`;

  const handleThemeSwitch = () => {
    setTheme(inversedTheme);
  };

  return (
    <Tooltip title={tooltipTitle}>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="theme"
        onClick={handleThemeSwitch}
      >
        <Icon path={mdiThemeLightDark} size={1} />
      </IconButton>
    </Tooltip>
  );
}

export default ThemeSwitcher;
