import { createSlice } from '@reduxjs/toolkit'

const initialState={
    user_details:{
        request:"studio_create_user",
        name:"",
        email:"",
        password:"",
        aadhar:"",
        address:"",
        phone:"",
        city:"",
        area:"",
        pin:""
    }
}

export const RegSlice = createSlice({
  name: 'register',
  initialState:initialState,
  reducers: {
    details: (state,action) => {
      state.user_details=action.payload
    },
  },
})
export const {details } = RegSlice.actions

export default RegSlice.reducer