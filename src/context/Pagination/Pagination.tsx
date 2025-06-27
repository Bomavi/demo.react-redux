import { createContext, useContext, useState } from 'react';
import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';

export interface PaginationState {
  page: number;
  size: number;
  skip: number;
}

export interface PaginationContextResult {
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
}

export interface PaginationProviderProps {
  defaultPagination?: PaginationState;
}

export const DEFAULT_STATE: PaginationState = {
  page: 0,
  size: 10,
  skip: 0,
};

const PaginationContext = createContext<PaginationContextResult>({
  pagination: DEFAULT_STATE,
  setPagination: () => {
    // void
  },
});

const PaginationProvider: FC<PropsWithChildren<PaginationProviderProps>> = ({
  children,
  defaultPagination = DEFAULT_STATE,
}) => {
  const [pagination, setPagination] = useState(defaultPagination);

  return (
    <PaginationContext.Provider value={{ pagination, setPagination }}>
      {children}
    </PaginationContext.Provider>
  );
};

export const usePagination = (): PaginationContextResult => {
  const context = useContext(PaginationContext);

  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }

  return context;
};

export default PaginationProvider;
