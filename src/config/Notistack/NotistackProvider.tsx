import { ReactNode } from 'react';

import { SnackbarProvider } from 'notistack';

import { StyledMaterialDesignContent } from './styled';
import './styles.css';

interface Props {
  children: ReactNode;
}

function NotistackProvider({ children }: Props) {
  return (
    <SnackbarProvider
      dense
      disableWindowBlurListener
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
      }}
    >
      {children}
    </SnackbarProvider>
  );
}

export default NotistackProvider;
