import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from 'src/api/config';

import type { TaskCreateSchema, TaskSchema, TaskUpdateSchema } from './typings';

export const tasksApi = createApi({
  reducerPath: 'tasksApi',

  tagTypes: ['tasks'],

  baseQuery: axiosBaseQuery({
    baseUrl: 'http://localhost:3000',
    withCredentials: true,
  }),

  endpoints: (builder) => ({
    getTasks: builder.query<TaskSchema, any>({
      query: (params = {}) => ({ url: '/tasks', method: 'GET', params }),
      providesTags: ['tasks'],
    }),

    createTask: builder.mutation<TaskSchema, TaskCreateSchema>({
      query: (data) => ({
        url: '/tasks',
        method: 'POST',
        data,
      }),
      invalidatesTags: ['tasks'],
    }),

    updateTask: builder.mutation<TaskSchema, TaskUpdateSchema>({
      query: ({ id, ...data }) => ({
        url: `/tasks/${id}`,
        method: 'PUT',
        data,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'tasks', _id: id }],
    }),

    deleteTask: builder.mutation<TaskSchema, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'tasks', _id: id }],
    }),
  }),
});

export const {
  useCreateTaskMutation,
  useDeleteTaskMutation,
  useGetTasksQuery,
  useUpdateTaskMutation,
} = tasksApi;
