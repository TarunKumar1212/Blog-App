import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    staus : false,
    userData : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state,action)=> {
            state.staus = true;
            state.userData = action.payload.userData;
        },
        logout : (state) =>{
            state.staus = false;
            state.userData = null;
        }
    }  
})



export default authSlice.reducer ;

export const {login,logout} = authSlice.actions ;