import { MaterialDesignContent } from 'notistack';

import { styled } from '@mui/material/styles';

import { COLORS, GRADIENTS } from 'src/utils/constants/colors';

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(
  ({ theme }) => ({
    '&.notistack-MuiContent': {
      borderRadius: 12,
      borderWidth: 2,
      borderStyle: 'solid',
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
    },

    '&.notistack-MuiContent-success': {
      background: GRADIENTS.primary,
      borderColor: COLORS.primary.main,
    },

    '&.notistack-MuiContent-error': {
      background: GRADIENTS.secondary,
      borderColor: COLORS.secondary.main,
    },
  })
);
