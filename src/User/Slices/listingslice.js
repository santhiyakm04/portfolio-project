import { createSlice } from "@reduxjs/toolkit"

const inititalState={
    studioDetails:{
        name:"a",
        address:"",
        phone:"",
        city:"",
        area:"",
        pin:"",
        email:"",
                  
    }
}
export const ListingSlice = createSlice(
    {
        name:"studiolisting",
        initialState:inititalState,
        reducers:{
            studiosDetailsData:(state,action)=>{
                state.details=action.payload
            }
        }
    }
)

export const {studiosDetailsData}=ListingSlice.actions

export default ListingSlice.reducer
