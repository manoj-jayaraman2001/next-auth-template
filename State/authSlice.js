import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    user: null,
    theme: 'light'
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setTheme: (state) => {
            state.theme = state.theme === 'light' ? "dark" : "light"
        }
    }
})


export const {setTheme}  = authSlice.actions

export default authSlice.reducer