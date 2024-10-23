import { RouterProvider } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import { router } from 'src/router';
import { useThemeContext } from 'src/context/Theme';
import { darkTheme, lightTheme } from 'src/utils/themes';

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Box sx={{ fontFamily: 'Roboto, sans-serif' }}>
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
