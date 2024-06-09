import { emptyAPI } from "./baseApi";

const endpointsAPI = emptyAPI.injectEndpoints({
    endpoints: (build) => ({
        getProducts:build.query({
            query: (count) => `/products?limit=${count}`,
    }),
    getSingleProduct:build.query({
        query: (id) => `/products/${id}`
    }),
    overrideExisting:false,
})
})

export const {useGetProductsQuery, useGetSingleProductQuery} = endpointsAPI;
export {endpointsAPI};