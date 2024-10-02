import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/counter'
import AdminSlice  from '../Admin/Slices/AdminLoginSlice'
import ListingSlice from '../User/Slices/listingslice'
import  RegSlice  from '../User/Slices/registerslice'
import loginslice from '../User/Slices/loginslice'
import neww from '../User/Slices/new'
export default configureStore({
  reducer:{
    counter:counterSlice,
    AdminLogin:AdminSlice,
    studiolisting:ListingSlice,
    register:RegSlice,
    login:loginslice,
    book:neww
  }
})