import { navlinks } from "./navlinks";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start lg:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 me-2 rounded-lg"
          ></img>
          <Link to="/" className="font-semibold normal-case text-xl">
            JobToday
          </Link>
        </div>
        <div className="navbar-end">
          {navlinks.map((item) => {
            return (
              <Link
                className="btn bg-yellow-400 ms-2 normal-case text-xl hover:bg-yellow-300"
                key={item.page_name}
                to={item.page_url}
              >
                {item.page_name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
