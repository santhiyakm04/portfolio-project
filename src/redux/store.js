import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/counter'
import  RegSlice  from '../User/Slices/registerslice'
import loginslice from '../User/Slices/loginslice'
import neww from '../User/Slices/new'
export default configureStore({
  reducer:{
    counter:counterSlice,
    register:RegSlice,
    login:loginslice,
    book:neww
  }
})