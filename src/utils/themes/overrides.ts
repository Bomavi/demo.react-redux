import { createTheme } from '@mui/material/styles';

import { COLORS, GRADIENTS } from 'src/utils/constants/colors';

export const themeOverrides = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },

    MuiButton: {
      defaultProps: {
        // disableElevation: true,
      },

      styleOverrides: {
        root: {
          borderRadius: 12,
          fontSize: 13,
          fontWeight: 600,
          minWidth: 100,
        },

        contained: {
          borderWidth: 2,
          borderStyle: 'solid',
        },

        containedPrimary: {
          background: GRADIENTS.primary,
          borderColor: COLORS.primary.main,
          color: '#FFFFFF',
        },

        containedSecondary: {
          borderColor: COLORS.secondary.main,
          background: GRADIENTS.secondary,
          color: '#FFFFFF',
        },

        outlined: {
          borderWidth: '2px !important',
        },
      },
    },

    MuiDrawer: {
      defaultProps: {
        PaperProps: {
          sx: (theme) => ({
            background: theme.palette.background.default,
          }),
        },
      },

      styleOverrides: {
        paper: {
          borderRadius: 0,
        },
      },
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,

          '& input:-webkit-autofill': {
            WebkitTransitionDelay: '99999s',
          },
          '& input:-webkit-autofill:hover': {
            WebkitTransitionDelay: '99999s',
          },
          '& input:-webkit-autofill:focus': {
            WebkitTransitionDelay: '99999s',
          },
          '& input:-webkit-autofill:active': {
            WebkitTransitionDelay: '99999s',
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,

          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
          },

          '& input:-webkit-autofill': {
            WebkitTransitionDelay: '99999s',
          },
          '& input:-webkit-autofill:hover': {
            WebkitTransitionDelay: '99999s',
          },
          '& input:-webkit-autofill:focus': {
            WebkitTransitionDelay: '99999s',
          },
          '& input:-webkit-autofill:active': {
            WebkitTransitionDelay: '99999s',
          },
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root.MuiInputLabel-shrink': {
            fontWeight: 900,
          },
        },
      },
    },
  },
});
