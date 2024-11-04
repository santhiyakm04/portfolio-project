import { createSlice } from '@reduxjs/toolkit'

export const bookslice = createSlice({
  name:'book',
  initialState:{

  book_details:{
    event_date:"",
    event_time:"",
    location:"",
    venue:"",
    event_type:"",
    packages:"",
    user_id:"",
    studio_id:""
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