import { OutlinedInputProps } from '@mui/material/OutlinedInput';

import { StyledOutlinedInput } from './styled';

function TodoInput(props: OutlinedInputProps) {
  return <StyledOutlinedInput {...props} />;
}

export default TodoInput;
