import { darken, lighten, styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme, color }) => {
  const bgColor =
    theme.palette.mode === 'light'
      ? lighten(theme.palette.text.primary, 0.9)
      : darken(theme.palette.text.primary, 0.7);

  const borderColor =
    theme.palette.mode === 'light'
      ? lighten(theme.palette.text.primary, 0.8)
      : darken(theme.palette.text.primary, 0.6);

  const borderColorHighlighted = color || theme.palette.primary.main;

  return {
    backgroundColor: bgColor,

    '& .MuiOutlinedInput-notchedOutline, &.Mui-disabled .MuiOutlinedInput-notchedOutline':
      {
        borderColor: bgColor,
      },

    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline, &.Mui-disabled .MuiOutlinedInput-notchedOutline':
        {
          borderColor,
        },
    },

    '&.editable .MuiOutlinedInput-notchedOutline': {
      borderColor: borderColorHighlighted,
    },

    '&.highlightIfDisabled .MuiInputBase-input': {
      WebkitTextFillColor: theme.palette.text.primary,
    },

    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.main,
    },

    '&.completed input': {
      textDecoration: 'line-through',
    },
  };
});
