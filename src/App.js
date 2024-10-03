
import { Admin_Login } from './Admin/Pages/Admin-Login/Index';
import './App.css';
import { User_Login } from './User/Pages/User-Login/Index';
import { createBrowserRouter, RouterProvider}from "react-router-dom";
import { User_Register } from './User/Pages/User-Register/Index';
import { Studio_Register } from './Studio/Pages/Studio-Register/Index';
import { Studio_Order } from './Studio/Pages/studio_orders';
import { Viewdetails } from './Studio/Pages/client_details';
import { Studio_Listing } from './User/Pages/Studios-List/';
import { Studio_Details } from './User/Pages/Studio-Details';
import { Admin_Panel } from './Admin/Pages/Admin_Panel';
import { Admin_View } from './Admin/Pages/studio_view';
import { Book_Details } from './User/Pages/Book_details';
import { View_Details } from './User/Pages/View_details';
import { Studio_Login } from './Studio/Pages/Studio-Login/Index';
import { User_View } from './Admin/Pages/user_view';

const router = createBrowserRouter([
  {
    path:"/user_login",
    element: <div><User_Login/></div>
  },
  {
    path:"/studio_register",
    element: <div><Studio_Register/></div>
  },
  

  {
    path:"/studio_login",
    element: <div><Studio_Login/></div>
  },
  {
    path:"/",
    element: <div><Admin_Login/></div>
  },

  {
    path:"/admin/panel",
    element: <div><Admin_Panel/></div>
  },
  {
    path:"/admin/view/:id",
    element: <div><Admin_View/></div>
  },
  {
    path:"/admin/user_view/:user_id",
    element: <div><User_View/></div>
  },

  {
    path:"/user_register",
    element: <div><User_Register/></div>
  },
  {
    path:"/book_details",
    element: <div><Book_Details/></div>
  },
  {
    path:"/Studio_Orders",
    element: <div><Studio_Order/></div>
  },
  {
    path:"/clientdetails/:id",
    element: <div><Viewdetails/></div>
  },
  {
    path:"/view_details",
    element: <div><View_Details/></div>
  },
  {
    path:"/studio/list",
    element: <div><Studio_Listing/></div>
    
  },
  {
    path:"/studio/details/:id",
    element: <div><Studio_Details/></div>
  }


]);

function App() {
  return(<RouterProvider router={router} />)
  
}

export default App;
