
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from "@reduxjs/toolkit/query"
import { endpointsAPI } from '../api/endpoints.js'
import itemsReducer from './count'
import cartReducer, { getTotal } from './cartSlice.js'
import likedProductsReducer from "./likedProductsSlice.js"

export const store = configureStore({
    reducer:{
        [endpointsAPI.reducerPath]: endpointsAPI.reducer,
        items: itemsReducer,
        cart: cartReducer,
        likedProducts:likedProductsReducer 
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(endpointsAPI.middleware),
    
})
store.dispatch(getTotal())

setupListeners(store.dispatch)