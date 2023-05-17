import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContent } from "../../../system/AuthProvider/AuthProvider";
const NavBar = () => {
  const { user, userLogout } = useContext(AuthContent);

  return (
    <div className="navbar py-6 px-0">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">All Toys</Link>
            </li>
            {user?.email ? (
              <>
                <li>
                  <Link to="/">My Toys</Link>
                </li>
                <li>
                  <Link to="/">Add Toy</Link>
                </li>
                <li>
                  <p onClick={userLogout}>Logout</p>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link to="/" className="text-3xl font-bold flex items-center gap-1">
          <img src="/logo.jpg" className="w-10" alt="logo" />
          <span className="mb-2">Shopper</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">All Toys</Link>
          </li>
          {user?.email ? (
            <>
              <li>
                <Link to="/">My Toys</Link>
              </li>
              <li>
                <Link to="/">Add Toy</Link>
              </li>
              <li>
                <p onClick={userLogout}>Logout</p>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email && (
          <>
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img title={user?.displayName} src={user?.photoURL} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
