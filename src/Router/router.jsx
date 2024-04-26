import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../Components/Home';
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import SpotsDetails from "../Components/SpotsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/details/:id",
            element: <SpotsDetails />,
            loader: ({params}) => fetch(`http://localhost:3000/spots/${params.id}`)
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",	
          element: <Login />,
        }
    ]
  },
]);

export default router;
