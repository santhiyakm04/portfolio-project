import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/counter'
import  RegSlice  from '../User/Slices/registerslice'
import loginslice from '../User/Slices/loginslice'

export default configureStore({
  reducer: {
    counter:counterSlice,
    register:RegSlice,
    login:loginslice
  },
})