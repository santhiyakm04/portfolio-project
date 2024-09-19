
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello</div>,
  },
]);

function App() {
  <RouterProvider router={router} />
}

export default App;
