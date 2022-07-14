import {configureStore, createSlice} from '@reduxjs/toolkit'


let user = createSlice({
    name: 'user',
    initialState: 'kim',
    reducers: {
        setUser(state, input) {
            return input.payload;
        }
    },
})

export let { setUser } = user.actions

let stock = createSlice({
    name: 'stock',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 1, name: 'Grey Yordan', count: 1}
    ],
    reducers: {
        setStock(state, input) {
            state[input.payload.idx].count += 1
            return state;
        }
    }
})

export let { setStock } = stock.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        stock: stock.reducer,
    }
})