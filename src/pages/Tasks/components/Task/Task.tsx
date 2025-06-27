import { useRef, useState } from 'react';

import { Icon } from '@mdi/react';
import { mdiCancel, mdiCheck, mdiClose, mdiPencil } from '@mdi/js';
import { Controller, useForm } from 'react-hook-form';
import cx from 'classnames';

import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

import TodoInput from 'src/components/TodoInput';
import ErrorTooltip from 'src/components/ErrorTooltip';
import { useSnackbar } from 'src/utils/hooks/useSnackbar';

const NAME = 'task';

interface FormData {
  task: string;
}

interface Props {
  id: string;
  text: string;
  completed: boolean;
}

function Task({ id, completed, text }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const { showSuccessSnackbar, showErrorSnackbar } = useSnackbar();

  const [editable, setEditable] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const {
    control,
    formState: { errors },
    resetField,
    clearErrors,
    handleSubmit: onSubmit,
  } = useForm<FormData>({
    defaultValues: {
      task: text,
    },
    mode: 'onChange',
  });

  const handleEditStart = () => {
    setEditable(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleEditCancel = () => {
    setEditable(false);
    resetField(NAME);
  };

  const handleTaskSave = (_data: FormData) => {
    setEditable(false);
    showSuccessSnackbar({ message: `Save task ${id}` });
  };

  const handleTaskRemove = () => {
    console.log('Removing task...', id);
    showErrorSnackbar({ message: 'Failed!' });
  };

  const handleFocusIn = () => {
    setIsFocused(true);
  };

  const handleMouseLeave = () => {
    if (editable) {
      return;
    }

    setIsFocused(false);
  };

  const handleFocusOut = () => {
    clearErrors('task');
  };

  const errorMessage = errors[NAME]?.message;
  const statusHelperText = completed
    ? 'Mark as uncompleted'
    : 'Mark as completed';

  const renderTaskActions = () => {
    if (!isFocused) {
      return null;
    }

    if (editable) {
      return (
        <Box sx={{ display: 'flex' }}>
          <Tooltip title="Save" placement="bottom">
            <IconButton onClick={onSubmit(handleTaskSave)}>
              <Icon path={mdiCheck} size={1} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Cancel" placement="bottom">
            <IconButton onClick={handleEditCancel}>
              <Icon path={mdiCancel} size={1} />
            </IconButton>
          </Tooltip>
        </Box>
      );
    }

    return (
      <Box sx={{ display: 'flex' }}>
        <Tooltip title="Edit" placement="bottom">
          <IconButton onClick={handleEditStart}>
            <Icon path={mdiPencil} size={1} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove" placement="bottom">
          <IconButton onClick={handleTaskRemove}>
            <Icon path={mdiClose} size={1} />
          </IconButton>
        </Tooltip>
      </Box>
    );
  };

  return (
    <Box sx={{ mb: 1 }}>
      <ErrorTooltip title={errorMessage}>
        <div>
          <Controller
            name={NAME}
            control={control}
            rules={{ required: 'This field is required' }}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { ref, ...field }, formState: { errors } }) => (
              <TodoInput
                fullWidth
                autoComplete="off"
                className={cx('highlightIfDisabled', { editable, completed })}
                {...field}
                disabled={!editable}
                error={!!errors[NAME]?.message}
                inputRef={inputRef}
                startAdornment={
                  <Tooltip title={statusHelperText} placement="bottom">
                    <Checkbox checked={completed} disabled={editable} />
                  </Tooltip>
                }
                endAdornment={renderTaskActions()}
                onMouseEnter={handleFocusIn}
                onFocus={handleFocusIn}
                onMouseLeave={handleMouseLeave}
                onBlur={handleFocusOut}
              />
            )}
          />
        </div>
      </ErrorTooltip>
    </Box>
  );
}

export default Task;
