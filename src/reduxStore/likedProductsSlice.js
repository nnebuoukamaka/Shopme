import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let initialLikedItems = [];

try {
  const likedItems = localStorage.getItem("likedItems");
  if (likedItems) {
    initialLikedItems = JSON.parse(likedItems);
  }
} catch (e) {
  console.error("Error parsing liked items from localStorage", e);
  initialLikedItems = [];
}

const likedProductsSlice = createSlice({
    name: "likedProducts",
    initialState: {
       likedItem: initialLikedItems,
        // likedItems: localStorage.getItem("likedItems") ? JSON.parse(localStorage.getItem("likedItems")) : []
    },
    reducers: {
        addToLikedList(state, action) {

            const itemIndex = state.likedItems.findIndex((likedItem) => likedItem.id === action.payload.id);
            if(itemIndex >= 0){
                toast.info( `${action.payload.title} is already in liked list!`)
            }else{
                state.likedItems.push(action.payload);
                toast.success(`${action.payload.title} added to liked list!`);
            }
            localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
        },

        removeFromLikedList: (state, action) => {
          const newLikedItems =  state.likedItems.filter((likedItem) => likedItem.id != action.payload.id);
          state.likedItems = newLikedItems;
          localStorage.setItem("likedItems", JSON.stringify(state.likedItems));
            toast.error(`${action.payload.title} removed from liked list`);

        },

        clearLikedList(state, action) {
            state.likedItems = [];
            toast.error("All items cleared from cart!");
            localStorage.setItem("likedItems", JSON.stringify(state.likedItems))
        },

    }

});

export const {addToLikedList, removeFromLikedList, clearLikedList} = likedProductsSlice.actions;
export default likedProductsSlice.reducer;