import { Link, NavLink } from "react-router-dom";

// will have logo, donation requests, blog, login, registration link before logged
// in. and will have dashboard, and fundings links addition to those links.

import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
import useAdmin from "../../../hooks/useAdmin";
import useCurrentUser from "../../../hooks/useCurrentUser";
const Navbar = () => {
  const { user, logout } = useAuth();
  const [isAdmin] = useAdmin();
  const { currentUser } = useCurrentUser();
  const role = currentUser[0]?.role;

  const navLinks = (
    <>
      <li>
        <NavLink to="/requests">Donation Requests</NavLink>
      </li>
      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>

      {user ? (
        <>
          {" "}
          {user && isAdmin && (
            <li>
              <Link to="/dashboard/adminHome">Dashboard</Link>
            </li>
          )}
          {user && role == "volunteer" && (
            <li>
              <Link to="/dashboard/adminHome">Dashboard</Link>
            </li>
          )}
          {user && role === "donor" && (
            <li>
              <Link to="/dashboard/userHome">Dashboard</Link>
            </li>
          )}
          <li>
            <NavLink to="/funding">Fundings</NavLink>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-[#008080]  text-white font-semibold border-b-2 border-l-2 border-r-2 border-green-400">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="flex items-center justify-center-center gap-2 text-xl"
        >
          <img
            className="w-8"
            src="https://i.ibb.co/MZbwWpp/205916-removebg-preview.png"
            alt=""
          />
          LifeFlowDonor
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#008080] rounded-box w-52"
            >
              <li className="hover:bg-blue-900 rounded-md ">
                <Link to="/dashboard/profile" className="justify-between">
                  Profile
                </Link>
              </li>
              <li className="border-b-2 border-white bg-white"></li>
              <li>
                <p
                  onClick={() => logout()}
                  className="hover:bg-red-500 hover:text-white"
                >
                  Logout
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
