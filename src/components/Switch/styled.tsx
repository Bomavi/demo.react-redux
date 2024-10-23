import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

export const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,

  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,

    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },

    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.background.default
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },

    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.background.default
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },

  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2,
  },
}));

export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch disableRipple focusVisibleClassName=".Mui-focusVisible" {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,

  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',

    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',

      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.secondary.main,
        backgroundSize: '100%',
        opacity: 1,
        border: 0,
      },

      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },

    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: theme.palette.secondary.main,
      border: '6px solid #fff',
    },

    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },

    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },

  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },

  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
