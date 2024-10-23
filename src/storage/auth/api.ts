import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from 'src/api/config';

import type {
  UserLoginSchema,
  UserRegistrationSchema,
  UserSchema,
} from './typings';

export const authApi = createApi({
  reducerPath: 'authApi',

  tagTypes: ['auth'],

  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:3000',
    withCredentials: false,
  }),

  endpoints: (builder) => ({
    getUserById: builder.query<UserSchema, string>({
      query: (id) => ({ url: `/users/${id}`, method: 'GET' }),
    }),

    updateUser: builder.mutation<UserSchema, Partial<UserSchema>>({
      query: ({ _id, ...data }) => ({
        url: `/users/${_id}`,
        method: 'PUT',
        data,
      }),
    }),

    login: builder.mutation<UserSchema, UserLoginSchema>({
      query: (data) => ({
        url: '/login',
        method: 'POST',
        data,
      }),
    }),

    authenticate: builder.mutation<UserSchema, unknown>({
      query: (data) => ({
        url: '/authenticate',
        method: 'POST',
        data,
      }),
    }),

    register: builder.mutation<UserSchema, UserRegistrationSchema>({
      query: (data) => ({
        url: '/register',
        method: 'POST',
        data,
      }),
    }),

    logout: builder.mutation<unknown, unknown>({
      query: (data) => ({
        url: '/logout',
        method: 'POST',
        data,
      }),
    }),
  }),
});

export const {
  useAuthenticateMutation,
  useGetUserByIdQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useUpdateUserMutation,
} = authApi;
