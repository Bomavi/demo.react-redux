import { OptionsObject } from 'notistack';

export const IS_DEV = import.meta.env.DEV;

export const HOST = import.meta.env.VITE_DEV_HOST || '';

export const SERVICES_PATH = import.meta.env.VITE_SERVICES_PATH;
export const SERVICES_URL = `${HOST}${SERVICES_PATH}`;

export const API_PATH = import.meta.env.VITE_API_PATH;
export const API_URL = `${SERVICES_URL}${API_PATH}`;

export const AUTH_PATH = import.meta.env.VITE_AUTH_PATH;
export const AUTH_URL = `${API_URL}${AUTH_PATH}`;

export const SNACKBAR = {
  defaultOptions: {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right',
    },
  } as Partial<OptionsObject>,
  resumeHideDuration: {
    success: 800,
    error: 2400,
  },
};
