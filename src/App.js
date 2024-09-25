
import { Admin_Login } from './Admin/Pages/Admin-Login/Index';
import { Admin_Register } from './Admin/Pages/Admin-Register/Index';
import './App.css';
import { Studio_Login } from './Studio/Pages/Studio-Login/Index';
import { User_Login } from './User/Pages/User-Login/Index';
import { createBrowserRouter, RouterProvider}from "react-router-dom";
import { User_Register } from './User/Pages/User-Register/Index';
import { Studio_Register } from './Studio/Pages/Studio-Register/Index';
import { Studio_Order } from './Studio/Pages/studio_orders';
import { Viewdetails } from './Studio/Pages/client_details';





const router = createBrowserRouter([
  {
    path:"/user_login",
    element: <div><User_Login/></div>
  },
  {
    path:"/studio_login",
    element: <div><Studio_Login/></div>
  },
  {
    path:"/admin_login",
    element: <div><Admin_Login/></div>
  },
  {
    path:"/admin_register",
    element: <div><Admin_Register/></div>
  },
  {
    path:"/user_register",
    element: <div><User_Register/></div>
  },
  {
    path:"/studio_register",
    element: <div><Studio_Register/></div>
  },
  {
    path:"/Studio_Orders",
    element: <div><Studio_Order/></div>
  },
  {
    path:"/clientdetails/:id",
    element: <div><Viewdetails/></div>
  },




]);

function App() {
  return(<RouterProvider router={router} />)
  
}

export default App;
