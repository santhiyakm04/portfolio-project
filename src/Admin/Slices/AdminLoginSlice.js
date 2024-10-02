import { createSlice } from "@reduxjs/toolkit"

export const AdminSlice = createSlice(
    {
        name:"AdminLogin",
        initialState:{
            details:{
                request:"candidate_login",
                email:"",
                password:"",               
            }
        },
        reducers:{
            updatingDetails:(state,action)=>{
                state.details=action.payload
            }
        }
    }
)

export const {updatingDetails}=AdminSlice.actions

export default AdminSlice.reducer
