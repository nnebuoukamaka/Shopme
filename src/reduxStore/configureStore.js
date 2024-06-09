
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { endpointsAPI } from '../api/endpoints.js'
import itemsReducer from './count'

export const store = configureStore({
    reducer:{
        [endpointsAPI.reducerPath]: endpointsAPI.reducer,
        items: itemsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(endpointsAPI.middleware),
    
})

setupListeners(store.dispatch)