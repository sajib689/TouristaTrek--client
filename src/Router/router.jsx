import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from './../Components/Home';
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";

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
