import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/counter'
import AdminSlice  from '../Admin/Slices/AdminLoginSlice'
export default configureStore({
  reducer: {
    counter:counterSlice,
    AdminLogin:AdminSlice
  },
})