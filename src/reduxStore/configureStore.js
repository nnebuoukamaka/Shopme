
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query";
import { productAPI } from "../api/product";
import counterReducer from './count'
// import { apiSlice } from "../api/apiSlice";

export const store = configureStore({
    reducer:{
        [productAPI.reducerPath]: productAPI.reducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productAPI.middleware),
    
})

setupListeners(store.dispatch)