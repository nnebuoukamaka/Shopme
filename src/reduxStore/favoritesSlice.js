import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
       favoriteItems: localStorage.getItem("favoriteItems") ? JSON.parse(localStorage.getItem("favoriteItems")) : []
    },
    reducers: {
        addToFavorites(state, action) {
            
            const itemIndex = state.favoriteItems.findIndex((favoriteItem) => favoriteItem.id === action.payload.id);
            if(itemIndex >= 0){
                toast.info( `${action.payload.title} is already in favorites list!`)

            }else{
                state.favoriteItems.push(action.payload);
                toast.success(`${action.payload.title} added to favorites list!`);
            }
            localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
        },

        removeFromFavorites: (state, action) => {
          const newFavoriteItems =  state.favoriteItems.filter((favoriteItem) => favoriteItem.id !== action.payload.id);
          state.favoriteItems = newFavoriteItems;
          localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems));
            toast.error(`${action.payload.title} removed from liked list`);

        },

        clearFavorites(state, action) {
            state.favoriteItems = [];
            toast.error("All items cleared from favorites list!");
            localStorage.setItem("favoriteItems", JSON.stringify(state.favoriteItems))
        },

    }

});

export const {addToFavorites, removeFromFavorites, clearFavorites} = favoritesSlice.actions;
export default favoritesSlice.reducer;