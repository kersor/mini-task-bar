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
  }),
})

export const { useGetAllTasksQuery, useCreateTaskMutation } = taskApi
export const { endpoints, reducerPath, reducer, middleware } = taskApi