import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const { user, logOut } = useContext(AuthContext);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Sign Out Success!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        if (err) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${err.message}`,
          });
        }
      });
  };
  const links = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allspot">All Tourists Spot</Link>
      </li>
      
      <>
        {user ? (
         <>
         <li>
          <Link to="/addspot">Add Tourists Spot</Link>
        </li>
          <li>
            <Link to="/mylist">My List</Link>
          </li>
         </>
        ) : (
          ""
        )}
      </>
      <li>
        <Link to="/">Contact Us</Link>
      </li>
      <li>
        <Link to="/">About Us</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          TouristaTrek
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <div>
          {user ? (
            <div
              className="tooltip tooltip-bottom z-10 cursor-pointer"
              data-tip={user?.displayName}
            >
              <img
                alt=""
                className="me-4 w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-gray-300 dark:ring-offset-gray-100"
                src={user?.photoURL}
              />
            </div>
          ) : (
            <></>
          )}
        </div>
        <>
          {user ? (
            <Link
              onClick={handleSignOut}
              className="btn bg-[#fc5a34] text-white rounded-none hover:bg-[#000]"
            >
              Sign Out
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-[#fc5a34] text-white rounded-none hover:bg-[#000]"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="btn bg-[#fc5a34] text-white rounded-none hover:bg-[#000]"
              >
                Sign Up
              </Link>
            </>
          )}
        </>
        <div className="ms-2">
          <input
            onChange={handleToggle}
            type="checkbox"
            //   value={theme}
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
