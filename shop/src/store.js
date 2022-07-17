import {configureStore, createSlice} from '@reduxjs/toolkit'
import user from './store/userSlice'



let stock = createSlice({
    name: 'stock',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 1, name: 'Grey Yordan', count: 1}
    ],
    reducers: {
        setStock(state, input) {
            state.map((value) => {
                if (value.id === input.payload.el.id) {
                    value.count++
                }
                return value;
            })
        },
        addItem(state, action) {

            const item = state.find((value) => {
                return value.id === action.payload.id;
            })
            if (item) {
                item.count++
            } else {
                state.push(action.payload)
            }
        }
    }
})

export let { setStock, addItem } = stock.actions

let wishList = createSlice({
    name: 'wishList',
    initialState: {},
    reducers: {
        setWishList(state, action) {
            if (state[action.payload.title]) { 
                state[action.payload.title] += 1 
            } else {
                state[action.payload.title] = 1
            }
        }
    }
}, )

export let { setWishList } = wishList.actions;

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
        wishList: wishList.reducer
    }
})