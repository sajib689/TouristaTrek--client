import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "./../Components/Home";
import Register from "../Authentication/Register";
import Login from "../Authentication/Login";
import SpotsDetails from "../Components/SpotsDetails";
import AddSpot from "../Components/AddSpot";
import MyList from "../Components/MyList";
import AllSpots from "../Components/AllSpots";
import UpdateSpot from "../Components/UpdateSpot";

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
        loader: ({ params }) =>
          fetch(`http://localhost:3000/spots/${params.id}`),
      },
      {
        path: "/addspot",
        element: <AddSpot />,
      },
      {
        path: "/allspot",
        element: <AllSpots />,
        loader: () => fetch('http://localhost:3000/spots')
      },

      {
        path: "/mylist",
        element: <MyList />,
      },
      {
        path: "/update/:id",
        element: <UpdateSpot />,
        loader: ({params}) => fetch(`http://localhost:3000/spots/${params.id}`)
      },

      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
