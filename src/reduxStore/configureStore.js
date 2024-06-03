
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { endpointsAPI } from '../api/endpoints.js'
import counterReducer from './count'

export const store = configureStore({
    reducer:{
        [endpointsAPI.reducerPath]: endpointsAPI.reducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(endpointsAPI.middleware),
    
})

setupListeners(store.dispatch)