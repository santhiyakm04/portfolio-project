import { createSlice } from '@reduxjs/toolkit'

export const bookslice = createSlice({
  name:'book',
  initialState:{

    book_details:{
    name:"",
    email:"",
    phone:"",
    address:"",
    bridenamegroomname:"",
    date:"",
    time:"",
    location:"",
    venue:"",
    eventtype:"",
    packages:""
},
   
},
  reducers: {
    booking:(state,action)=>{
      state.book_details=action.payload
    },
  },
})
export const {booking}=bookslice.actions

export default bookslice.reducer