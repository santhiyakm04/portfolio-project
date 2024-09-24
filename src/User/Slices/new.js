import { createSlice } from '@reduxjs/toolkit'

// const initialState={
//     book_details:{
//         name:"",
//         email:"",
//         address:"",
//         phone:"",
//         city:"",
//         area:"",
//         bridename:"",
//         groomname:"",
//         date:"",
//         time:"",
//         location:"",
//         venue:"",
//         eventtype:""
       
//     }
// }

export const bookslice = createSlice({
  name:'book',
  initialState:{

    book_details:{
    name:"",
    email:"",
    address:"",
    phone:"",
    city:"",
    area:"",
    bridename:"",
    groomname:"",
    date:"",
    time:"",
    location:"",
    venue:"",
    eventtype:""
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