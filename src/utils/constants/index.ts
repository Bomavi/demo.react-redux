export const IS_DEV = process.env.NODE_ENV === 'development';

export const HOST = process.env.REACT_APP_DEV_HOST || '';

export const SERVICES_PATH = process.env.REACT_APP_SERVICES_PATH;
export const SERVICES_URL = `${HOST}${SERVICES_PATH}`;

export const API_PATH = process.env.REACT_APP_API_PATH;
export const API_URL = `${SERVICES_URL}${API_PATH}`;

export const AUTH_PATH = process.env.REACT_APP_AUTH_PATH;
export const AUTH_URL = `${API_URL}${AUTH_PATH}`;
