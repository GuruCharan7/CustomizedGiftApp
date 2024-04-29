import {createSlice} from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name:'cart',
    initialState: {
        value:{
            id:-1,
            title: '',
            tag: '',
            link: '',
            quantity: 1,
            totalPrice: 0
        }
    },
    reducers:{
        addCart: (state, action)=>{
            state.value = action.payload
        }
    }
})

export default CartSlice.reducer;
export const {addCart} = CartSlice.actions;