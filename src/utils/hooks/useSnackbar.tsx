import { useCallback } from 'react';
import type { ReactNode } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';
import * as Notistack from 'notistack';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { SNACKBAR } from 'src/utils/constants/app';

interface SnackbarParams {
  message: string;
  persist?: boolean;
  intlValues?: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
  action?: ReactNode;
  autoHideDuration?: number;
}

interface IntlSnackbarParams extends SnackbarParams {
  variant: Notistack.VariantType;
  autoHideDuration?: number;
  resumeHideDuration?: number;
  action?: ReactNode;
}

interface UseSnackbarResult {
  enqueueSnackbar: Notistack.ProviderContext['enqueueSnackbar'];
  showIntlSnackbar: (params: IntlSnackbarParams) => Notistack.SnackbarKey;
  showSuccessSnackbar: (params: SnackbarParams) => Notistack.SnackbarKey;
  showErrorSnackbar: (params: SnackbarParams) => Notistack.SnackbarKey;
  closeSnackbar: Notistack.ProviderContext['closeSnackbar'];
}

export const useSnackbar = (
  anchorOrigin = SNACKBAR.defaultOptions.anchorOrigin,
): UseSnackbarResult => {
  const { enqueueSnackbar, closeSnackbar } = Notistack.useSnackbar();

  const { formatMessage } = useIntl();

  const showIntlSnackbar = useCallback(
    ({
      message,
      variant,
      autoHideDuration,
      resumeHideDuration,
      action,
      persist = false,
      intlValues = {},
    }: IntlSnackbarParams) => {
      return enqueueSnackbar(
        formatMessage(
          {
            id: message,
            defaultMessage: message,
          },
          intlValues,
        ),
        {
          ...SNACKBAR.defaultOptions,
          variant,
          persist,
          autoHideDuration,
          //   resumeHideDuration,
          anchorOrigin,
          action: (key) => {
            if (action) {
              if (typeof action === 'string') {
                return (
                  <Button
                    variant="text"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      closeSnackbar(key);
                    }}
                  >
                    <FormattedMessage id={action} defaultMessage={action} />
                  </Button>
                );
              } else {
                return (
                  <IconButton
                    color="inherit"
                    onClick={() => {
                      closeSnackbar(key);
                    }}
                  >
                    {action}
                  </IconButton>
                );
              }
            }
          },
        },
      );
    },
    [enqueueSnackbar, formatMessage, anchorOrigin, closeSnackbar],
  );

  const showSuccessSnackbar = useCallback(
    ({
      message,
      autoHideDuration,
      persist = false,
      intlValues = {},
    }: SnackbarParams) => {
      return showIntlSnackbar({
        message,
        variant: 'success',
        autoHideDuration,
        resumeHideDuration: SNACKBAR.resumeHideDuration.success,
        persist,
        intlValues,
      });
    },
    [showIntlSnackbar],
  );

  const showErrorSnackbar = useCallback(
    ({
      message,
      autoHideDuration,
      action,
      persist = false,
      intlValues = {},
    }: SnackbarParams) => {
      return showIntlSnackbar({
        message,
        variant: 'error',
        autoHideDuration,
        resumeHideDuration: SNACKBAR.resumeHideDuration.error,
        action,
        persist,
        intlValues,
      });
    },
    [showIntlSnackbar],
  );

  return {
    enqueueSnackbar,
    showSuccessSnackbar,
    showIntlSnackbar,
    showErrorSnackbar,
    closeSnackbar,
  };
};
