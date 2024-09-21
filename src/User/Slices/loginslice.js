import { createSlice } from "@reduxjs/toolkit"

const initialState={
      logData:{
        request: "candidate_login",
        email: "",
        password: ""
      },
}
export const loginslice=createSlice({
    name:"login",
    initialState:initialState,
    reducers:{
        log:(state,action)=>{
            state.logData=action.payload
        },
    
        
    }
})
export const{log}=loginslice.actions

export default loginslice.reducer