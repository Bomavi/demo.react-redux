import axios, {
  AxiosDefaults,
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from 'axios';

interface ApiGatewayParams {
  baseUrl: string;
  withCredentials?: boolean;
}

export function apiGateway({
  baseUrl,
  withCredentials = false,
}: ApiGatewayParams): AxiosInstance {
  const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  axios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // NOTE: handle any request configurations before execution
      if (withCredentials) {
        // NOTE: include access tokens here
        // eg: config.headers['Authorization'] = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error: AxiosError) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      // NOTE: handle action on faild response
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

export function axiosBaseQuery(
  { baseUrl, withCredentials } = { baseUrl: '', withCredentials: true }
) {
  return async ({
    url,
    method,
    data,
    params,
  }: Pick<AxiosDefaults, 'url' | 'method' | 'data' | 'params'>) => {
    try {
      const result = await apiGateway({ baseUrl, withCredentials })({
        url: baseUrl + url,
        method,
        data,
        params,
        withCredentials,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
}
