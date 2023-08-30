import { navlinks } from "./navlinks";
import logo from "../../assets/images/logo.svg";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/user/userSlice";

function Navbar() {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <>
      <div className="navbar bg-base-100">
        <div className="lg:flex-1 navbar-center">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 me-2 rounded-lg"
          ></img>
          <Link to="/" className="font-semibold normal-case text-xl">
            JobToday
          </Link>
        </div>
        {/* Big screen navbar */}
        <div className="navbar-end lg:flex md:flex hidden">
          {!user &&
            navlinks.map((item) => {
              return (
                <Link
                  className="btn bg-yellow-400 ms-2 normal-case text-md px-2 hover:bg-yellow-300"
                  key={item.page_name}
                  to={item.page_url}
                >
                  {item.page_name}
                </Link>
              );
            })}
          {user && (
            <div className="navbar-end lg:flex md:flex hidden items-center">
              <span
                tabIndex={0}
                className="ms-2 normal-case text-md px-3 py-1 rounded-lg font-semibold bg-green-200 border border-green-700"
              >
                Logged in as:
                <Link
                  key={"profile"}
                  to={"dashboard/profile"}
                  className="btn bg-green-600 ms-2 rounded-lg text-md hover:bg-green-500 text-white items-center"
                >
                  {user.name}
                </Link>
                <Link
                  className="btn bg-red-600 ms-2 rounded-lg text-md hover:bg-red-500 text-white items-center"
                  key={"logout"}
                  to={"/"}
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
                >
                  {"logout"}
                </Link>
              </span>
            </div>
          )}
        </div>
        {/* Small screen navbar */}
        <div className="navbar-end lg:hidden">
          <div className="dropdown dropdown-end">
            <button className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52 rounded-lg bg-base-100"
            >
              <li className="">
                <Link to="/">Homepage</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
