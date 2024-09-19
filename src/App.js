
import './App.css';

import { Login } from './Modules/Login';
import { createBrowserRouter, RouterProvider}from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <div><Login/></div>
  },
]);

function App() {
  return(<RouterProvider router={router} />)
  
}

export default App;
