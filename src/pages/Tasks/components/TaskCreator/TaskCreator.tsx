import { useForm } from 'react-hook-form';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import ErrorTooltip from 'src/components/ErrorTooltip';

import { StyledOutlinedInput } from './styled';

const NAME = 'task';

interface FormData {
  task: string;
}

function TasksCreator() {
  const {
    register,
    formState: { errors },
    clearErrors,
    handleSubmit: onSubmit,
  } = useForm<FormData>({
    defaultValues: {
      task: '',
    },
    mode: 'onSubmit',
  });

  const handleFocusOut = () => {
    clearErrors('task');
  };

  const handleSubmit = (data: FormData) => {
    console.log(data);
  };

  const errorMessage = errors[NAME]?.message;

  return (
    <Box>
      <form onSubmit={onSubmit(handleSubmit)}>
        <ErrorTooltip title={errorMessage}>
          <StyledOutlinedInput
            fullWidth
            autoComplete="off"
            placeholder="New task"
            {...register(NAME, { required: 'This field is required' })}
            error={!!errorMessage}
            endAdornment={
              <Button
                disableElevation
                variant="contained"
                color={!errorMessage ? 'primary' : 'secondary'}
                type="submit"
                sx={{
                  ml: 2,
                  mr: -0.5,
                }}
              >
                Add
              </Button>
            }
            onBlur={handleFocusOut}
          />
        </ErrorTooltip>
      </form>
    </Box>
  );
}

export default TasksCreator;
