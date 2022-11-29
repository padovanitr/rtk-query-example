import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const thronesApi = createApi({
  reducerPath: 'thronesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://thronesapi.com/api/v2/' }),
  endpoints: (builder) => ({
    getCharacters: builder.query<CharactersType[], void>({
      query: () => 'Characters',
    }),
  }),
})

export type CharactersType = {
  id: number
  firstName: string
  lastName: string
  fullName: string
  title: string
  family: string
  imageUrl: string
}

export const { useGetCharactersQuery } = thronesApi
