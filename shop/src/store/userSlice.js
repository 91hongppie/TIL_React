import { createSlice } from '@reduxjs/toolkit' 

let user = createSlice({
    name: 'user',
    initialState: {name: 'kim', age: 20},
    reducers: {
        setName(state, action) {
            state.name = 'park';
        },
        setAge(state, action) {
            state.age += action.payload
        }
    },
})

export let { setName, setAge } = user.actions

export default user;