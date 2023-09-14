import { navlinks } from "./navlinks";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearStore } from "../../features/user/userSlice";
import { sidenavlinks } from "./sidenav/sidenavlinks";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonFill } from "react-icons/bs";
import { changeTheme } from "../../features/theme/themeSlice";

function Navbar() {
  const { user } = useSelector((store) => store.user);
  const { theme } = useSelector((store) => store.theme);

  const dispatch = useDispatch();

  return (
    <>
      <div className="navbar bg-slate-100 dark:bg-cyan-900 p-4">
        {/* logo and brandname */}
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
          {/* about us and login/register nav buttons */}
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
          {/* user's name and logout button */}
          {user && (
            <div className="lg:flex hidden items-center">
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
                  dispatch(clearStore("Logout Successful..."));
                }}
              >
                {"logout"}
              </Link>
            </div>
          )}
          <button
            className="btn rounded-full mx-2 text-lg items-center align-middle border-2 bg-yellow-200 hover:bg-yellow-300 hover:border-yellow-400 border-yellow-400 shadow-md dark:text-white hover:dark:bg-gray-800 dark:bg-black dark:border-gray-700"
            type="button"
            onClick={() => {
              dispatch(changeTheme());
            }}
          >
            {theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
          </button>
        </div>
        {/* Small screen navbar */}
        <div className="navbar-end flex flex-auto lg:hidden p-2">
          <div>
            <button
              className="btn rounded-full mx-2 text-lg border-2 bg-yellow-200 hover:bg-yellow-300 hover:border-yellow-400 border-yellow-400 shadow-md dark:text-white hover:dark:bg-gray-800 dark:bg-black dark:border-gray-700"
              type="button"
              onClick={() => {
                dispatch(changeTheme());
              }}
            >
              {theme === "light" ? <BsFillSunFill /> : <BsFillMoonFill />}
            </button>
          </div>
          <div className="dropdown dropdown-end">
            {/* dropdown hamburger symbol */}
            <button className="btn btn-square text-black hover:bg-slate-300 bg-slate-200 border border-slate-300 hover:shadow-md">
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
            {/* dropdown menu options */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-36 rounded-lg bg-slate-100"
            >
              {/* homepage button */}
              {!user && (
                <li key="home" className="">
                  <Link
                    to="/"
                    className="text-black border border-black bg-slate-200 hover:bg-slate-400 mt-1 hover:shadow-md active:bg-slate-400"
                  >
                    Homepage
                  </Link>
                </li>
              )}

              {/* about us and login/register page */}
              {!user &&
                navlinks.map((item) => {
                  return (
                    <li key={item.page_name} className="">
                      <Link
                        to={item.page_url}
                        className="text-black border border-black bg-slate-200 hover:bg-slate-400 mt-1 hover:shadow-md active:bg-slate-400"
                      >
                        {item.page_name}
                      </Link>
                    </li>
                  );
                })}
              {/* after login navigation options */}
              {user &&
                sidenavlinks.map((item) => {
                  const pathurl = `dashboard/${item.path_url}`;
                  return (
                    <li key={item.path_name} className="">
                      <Link
                        to={pathurl}
                        className="bg-slate-200 text-black border border-black hover:bg-slate-300 mt-1 hover:shadow-md active:bg-slate-400"
                      >
                        {item.path_name}
                      </Link>
                    </li>
                  );
                })}
              {/* logout button */}
              {user && (
                <li key="logout" className="">
                  <Link
                    to="/"
                    onClick={() => {
                      dispatch(clearStore());
                    }}
                    className="bg-slate-200 text-black border border-black hover:bg-slate-300 mt-1  hover:shadow-md active:bg-slate-400"
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
