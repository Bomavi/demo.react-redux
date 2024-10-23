import { TextFieldProps } from '@mui/material/TextField';

import ErrorTooltip from 'src/components/ErrorTooltip';

import { StyledTextField } from './styled';

export type InputProps = {
  errorMessage?: string;
} & TextFieldProps;

function Input({ errorMessage, ...restProps }: InputProps) {
  return (
    <ErrorTooltip title={errorMessage}>
      <StyledTextField {...restProps} variant="outlined" />
    </ErrorTooltip>
  );
}

export default Input;
