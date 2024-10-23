import { alpha, styled } from '@mui/material/styles';
import Tooltip, { TooltipProps } from '@mui/material/Tooltip';

export const StyledErrorTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} componentsProps={{ tooltip: { className } }} />
  )
)(({ theme }) => {
  const errorBgColor = alpha(theme.palette.error.main, 0.8);

  return `
    font-size: 14px;
    visibility: hidden;

    &.withError {
      background-color: ${errorBgColor};
      visibility: visible;
    }

    &.withError [class*=MuiTooltip-arrow] {
      color: ${errorBgColor};
    }
  `;
});
