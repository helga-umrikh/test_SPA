import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../models/IPost'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], {limit:number,start:number}>({
            query: ({limit = 5, start = 0}) => ({
                url: '/posts',
                params: {
                    _limit: limit,
                    _start:start
                },
            }),
        }),
        fetchPostById: build.query<IPost, number>({
            query: (id: number) => `/posts/${id}`,
        }),
    }),
})
