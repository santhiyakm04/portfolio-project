import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/counter'
import AdminSlice  from '../Admin/Slices/AdminLoginSlice'
import ListingSlice from '../User/Slices/listingslice'
export default configureStore({
  reducer: {
    counter:counterSlice,
    AdminLogin:AdminSlice,
    studiolisting:ListingSlice
  },
})