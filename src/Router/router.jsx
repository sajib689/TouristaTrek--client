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
import PrivateRoute from "./PrivateRoute";
import CountryDetails from "../Components/CountryDetails";
import ViewDetails from "../Components/ViewDetails";

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
        element: <PrivateRoute><SpotsDetails /></PrivateRoute>,
        loader: ({ params }) =>
        fetch(`http://localhost:3000/spots/${params.id}`),
      },
      {
        path: "/countrydetails/:country_name",
        element: <CountryDetails/>,
        loader: ({params}) => fetch(`http://localhost:3000/countries?country_name=${params.country_name}`)
      },
      {
        path: "/viewdetails/tourist_spots/:id",
        element: <ViewDetails/>,
        loader: ({params}) => fetch(`http://localhost:3000/countries/tourist_spots/${params.id}`)
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
        element: <PrivateRoute><MyList /></PrivateRoute>,
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
