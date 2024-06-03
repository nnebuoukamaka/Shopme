import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
name:"counter",
initialState: {
count : 10
},
reducers:{
    loadMoreProducts: (state) =>{
        state.count += 10;
    },
    loadLessProducts: (state) =>{
        if(state.count === 10){
            state.count = 10
        } else
        state.count -= 10;
    }
}
});
export const {loadMoreProducts, loadLessProducts} = counterSlice.actions;
export default counterSlice.reducer;