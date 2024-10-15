import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from './Slices/counter'
import Registerslice from '../Studio/Slices/Registerslice'
import Loginslice from '../Studio/Slices/loginslice'
import profileslice, { studio } from '../Studio/Slices/profileslice'
import Updateslice from '../Studio/Slices/Updateslice'
import AdminSlice  from '../Admin/Slices/AdminLoginSlice'
import ListingSlice from '../User/Slices/listingslice'
import  RegSlice  from '../User/Slices/registerslice'
import loginslice from '../User/Slices/loginslice'
import  Editslice  from '../Studio/Slices/Editprofileslice' 
import neww from '../User/Slices/new'
export default configureStore({
  reducer:{
    counter:counterSlice,
    regis:Registerslice,
    logs:Loginslice,
    details:profileslice,
    updates:Updateslice,
    AdminLogin:AdminSlice,
    studiolisting:ListingSlice,
    register:RegSlice,
    login:loginslice,
    book:neww,
    updates:Editslice
  }
})