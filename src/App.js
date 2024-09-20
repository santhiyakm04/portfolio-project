
import './App.css';
import { Home } from './Modules/Home';
import { createBrowserRouter, RouterProvider}from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <div><Home/></div>
  },
]);

function App() {
  return(<RouterProvider router={router} />)
  
}

export default App;
