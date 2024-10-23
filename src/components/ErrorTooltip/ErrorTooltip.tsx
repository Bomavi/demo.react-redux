import cx from 'classnames';

import { TooltipProps } from '@mui/material/Tooltip';

import { StyledErrorTooltip } from './styled';

function ErrorTooltip({ children, title, ...restProps }: TooltipProps) {
  return (
    <StyledErrorTooltip
      arrow
      className={cx({ withError: !!title })}
      title={title}
      open={!!title}
      {...restProps}
    >
      {children}
    </StyledErrorTooltip>
  );
}

export default ErrorTooltip;
