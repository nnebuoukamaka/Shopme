import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        cartTotalQuantity : 0,
        cartTotalAmount: 0
    },
    reducers: {
        addToCart(state, action) {

            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id);
            if(itemIndex >= 0){
                state.cartItems[itemIndex].cartQuantity +=1;
                toast.info( `${action.payload.title}'s quantity increased in cart!`, {
                    position:"top-right"
                })
            }else{
                const tempProduct = {...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} added to Cart!`);
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        removeFromCart: (state, action) => {
          const newCartItems =  state.cartItems.filter((cartItem) => cartItem.id !== action.payload.id);
          state.cartItems = newCartItems;
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error(`${action.payload.title} removed from cart`)
        },

        decreaseCartProductQuantity(state, action) {
            const itemIndex = state.cartItems.findIndex((cartItem) => cartItem.id === action.payload.id)
            if(state.cartItems[itemIndex].cartQuantity > 1){
                state.cartItems[itemIndex].cartQuantity -=1;
                toast.info(`Decreased ${action.payload.title}'s quantity in cart!`)

            }else if(state.cartItems[itemIndex].cartQuantity === 1) {
                const newCartItems =  state.cartItems.filter((cartItem) => cartItem.id != action.payload.id);
                state.cartItems = newCartItems;
                  toast.error(`${action.payload.title} removed from cart`) 
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },

        clearCart(state, action) {
            state.cartItems = [];
            toast.error("All items cleared from cart!");
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },

        getTotal(state, action) {
           let {total, quantity} = state.cartItems.reduce((cartTotal, cartItem) => {
                const {price, cartQuantity} = cartItem;
                const itemtotal = price * cartQuantity ;
                cartTotal.total +=itemtotal;
                cartTotal.quantity +=cartQuantity;
                return cartTotal;
            }, 
            {
                total: 0,
                quantity: 0
            });
            state.cartTotalQuantity = quantity
            state.cartTotalAmount = total
        }
    }

});

export const {addToCart, removeFromCart, decreaseCartProductQuantity, clearCart, getTotal} = cartSlice.actions;
export default cartSlice.reducer;