import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from '../../types/Types'


export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5555' }),
  endpoints: (builder) => ({
    getAllTasks: builder.query<ITask[], void>({
      query: () => `/api`,
    }),
    createTask: builder.mutation<void, Partial<ITask>>({
      query: (name) => ({
        url: '/api',
        method: 'POST',
        body: name
      })
    }),
    deleteAllTask: builder.mutation<void, void>({
      query: () => ({
        url: '/api/all',
        method: 'DELETE'
      })
    }),
    deleteChangeTask: builder.mutation<void, number[]>({
      query: (numbers) => ({
        url: '/api',
        method: 'DELETE',
        body: numbers
      })
    })
  }),
})

export const { useGetAllTasksQuery, useCreateTaskMutation, useDeleteAllTaskMutation, useDeleteChangeTaskMutation } = taskApi
export const { endpoints, reducerPath, reducer, middleware } = taskApi