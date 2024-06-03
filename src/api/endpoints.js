import { emptyAPI } from "./baseApi";

const endpointsAPI = emptyAPI.injectEndpoints({
    endpoints: (build) => ({
        getProducts:build.query({
            query: (count) => `/products?limit=${count.count}`,
    }),
    // getSingleProduct:build.query({
    //     query: (id) => `/products/${id}`
    // }),
    overrideExisting:false,
})
})

export const {useGetProductsQuery} = endpointsAPI;
export {endpointsAPI};