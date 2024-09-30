import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/counter'
import Registerslice from '../Studio/Slices/Registerslice'
import Loginslice from '../Studio/Slices/loginslice'
import profileslice from '../Studio/Slices/profileslice'

export default configureStore({
  reducer: {
    counter:counterSlice,
    regis:Registerslice,
    logs:Loginslice,
    details:profileslice,

  },
})