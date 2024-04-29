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
import Contact from "../Components/Contact";
import About from "../Components/About";
import Error from "../Components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <SpotsDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-10-mocha.vercel.app/spots/${params.id}`),
      },
      {
        path: "/countrydetails/:country_name",
        element: <CountryDetails />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-10-mocha.vercel.app/countries/${params.country_name}`
          ),
      },
     
      {
        path: "/addspot",
        element: <AddSpot />,
      },
      {
        path: "/allspot",
        element: <AllSpots />,
        loader: () => fetch("https://assignment-10-mocha.vercel.app/spots"),
      },

      {
        path: "/mylist",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateSpot />,
        loader: ({ params }) =>
          fetch(`https://assignment-10-mocha.vercel.app/spots/${params.id}`),
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
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
