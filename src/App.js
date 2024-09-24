
import { Admin_Login } from './Admin/Pages/Admin-Login/Index';
import { Admin_Register } from './Admin/Pages/Admin-Register/Index';
import './App.css';
import { Studio_Login } from './Studio/Pages/Studio-Login/Index';
import { User_Login } from './User/Pages/User-Login/Index';
import { createBrowserRouter, RouterProvider}from "react-router-dom";
import { User_Register } from './User/Pages/User-Register/Index';
import { Studio_Register } from './Studio/Pages/Studio-Register/Index';
import { Admin_Panel } from './Admin/Pages/Admin Panel';
import { Studio_Details } from './User/Pages/Studio-Details';
import { Book_Details } from './User/Pages/Book_details';
import { View_Details } from './User/Pages/View_details';

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
    path:"/admin_panel",
    element: <div><Admin_Panel/></div>
  },
  {
    path:"/studio_details",
    element: <div><Studio_Details/></div>
  },
  {
    path:"/book_details",
    element: <div><Book_Details/></div>
  },
  {
    path:"/view_details",
    element: <div><View_Details/></div>
  },


]);

function App() {
  return(<RouterProvider router={router} />)
  
}

export default App;
