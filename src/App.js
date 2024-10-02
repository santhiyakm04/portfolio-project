import './App.css';
import { User_Login } from './User/Pages/User-Login/Index';
import { createBrowserRouter, RouterProvider}from "react-router-dom";
import { User_Register } from './User/Pages/User-Register/Index';
import { Book_Details } from './User/Pages/Book_details';
import { View_Details } from './User/Pages/View_details';
import { Studio_Listing } from './User/Pages/Studios-List';
import { Studio_Details } from './User/Pages/Studio-Details';
const router = createBrowserRouter([
  {
    path:"/user_login",
    element: <div><User_Login/></div>
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
