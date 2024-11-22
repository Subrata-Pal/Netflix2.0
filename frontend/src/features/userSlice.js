import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
name: 'user',
initialState: {
user : null,
isLoading: false,
},

reducers: {
    setUser : (state, action ) =>{
        console.log("inside set user ", action.payload)

        state.user = action.payload;
    },
    setLoading: (state, action) => {
        state.isLoading = action.payload
},
}
})


export const {setUser, setLoading} = userSlice.actions;
export default userSlice.reducer;