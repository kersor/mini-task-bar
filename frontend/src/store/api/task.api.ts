// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITask } from '../../types/Types'


// Define a service using a base URL and expected endpoints
export const taskApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5555' }),
  endpoints: (builder) => ({
    getAllTasks: builder.query<ITask[], void>({
      query: () => `/api`,
    }),
  }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetAllTasksQuery } = taskApi
export const { endpoints, reducerPath, reducer, middleware } = taskApi