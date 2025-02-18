import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icon.png";

import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProperties">Properties</NavLink>
      </li>

      {user?.email && (
        <>
          {" "}
          <li>
            <NavLink to="/dashboard/home">Dashboard</NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => {
        alert("something went worng on signout.", err.message);
      });
  };
  return (
    <div className="navbar bg-gray-400 md:px-12 sticky top-0 z-50 mb-4">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img className="w-12" src={logo} alt="" />
          <h1 className="md:text-3xl font-bold">Prime Real Estate</h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-[1rem] px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="flex items-center gap-4">
            <img
              className="w-12 h-12 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <p className="hidden md:inline-block">
              {user?.displayName || "N/A"}
            </p>
            <button
              onClick={handleLogout}
              className="btn bg-purple-700 hover:bg-purple-500 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-yellow-600 text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
