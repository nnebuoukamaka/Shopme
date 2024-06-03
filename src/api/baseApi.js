import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emptyAPI = createApi({
    
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com'}),
    endpoints: () => ({}),
})
