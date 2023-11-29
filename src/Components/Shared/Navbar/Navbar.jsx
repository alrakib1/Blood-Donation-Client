import { Link, NavLink } from "react-router-dom";

// will have logo, donation requests, blog, login, registration link before logged
// in. and will have dashboard, and fundings links addition to those links.

import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";
const Navbar = () => {
  const { user,logout } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/requests">Donation Requests</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>

      {user ? (
        <>
          {" "}
          <li>
            <NavLink to="/dashboard">Dashboard</NavLink>
          </li>
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
    <div className="navbar bg-white text-red-600 font-semibold">
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
        <Link to="/" className="btn btn-ghost text-xl">
          <img
            className="w-8"
            src="https://i.ibb.co/MZbwWpp/205916-removebg-preview.png"
            alt=""
          />
          Donate Blood
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {
          user && <a onClick={()=>logout()} className="btn">Logout</a>
        }
      </div>
    </div>
  );
};

export default Navbar;
