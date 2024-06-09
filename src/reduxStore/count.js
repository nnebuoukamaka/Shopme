import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice({
    
// name:"counter",
// initialState: {
// count : 10,
// things : []
// },
// reducers:{
//     loadMoreProducts: (state) =>{
//         state.count += 10;
//     },
//     loadLessProducts: (state) =>{
//         if(state.count === 10){
//             state.count = 10
//         } else
//         state.count -= 10;
//     }
// }
// });
// export const {loadMoreProducts, loadLessProducts} = counterSlice.actions;
// export default counterSlice.reducer;


export const itemsSlice = createSlice({
    
name:"items",
initialState: {
    data: [],
    status:'idle',
    error:null,
    count : 10,
},
reducers:{
    setItems: (state, action) =>{
        state.data = action.payload;
        state.status = 'succeeded';
    },
    setError: (state, action) =>{
        state.error = action.payload;
        state.status = 'Failed to load Products'
    },
    setStatus: (state) =>{
        state.status = 'Loading Products'
    },
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
export const {setItems, setError, setStatus, loadMoreProducts, loadLessProducts} = itemsSlice.actions;
export default itemsSlice.reducer;