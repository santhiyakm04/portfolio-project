import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/counter'
import Registerslice from '../Studio/Slices/Registerslice'
import Loginslice from '../Studio/Slices/loginslice'

export default configureStore({
  reducer: {
    counter:counterSlice,
    regis:Registerslice,
    logs:Loginslice

  },
})