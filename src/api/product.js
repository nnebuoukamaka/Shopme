import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productAPI = createApi({
    
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com'}),
    endpoints: (builder) => ({
        getProducts:builder.query({
            query: (count) => `/products?limit=${count.count}`,
            // query: `products$limit=10&skip=10`
        })
    })
})
export const {useGetProductsQuery} = productAPI