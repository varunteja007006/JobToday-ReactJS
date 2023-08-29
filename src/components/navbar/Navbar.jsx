import { navlinks } from "./navlinks";
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
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
        <div className="navbar-end lg:flex md:flex hidden">
          {navlinks.map((item) => {
            return (
              <Link
                className="btn bg-yellow-400 ms-2 normal-case text-lg hover:bg-yellow-300"
                key={item.page_name}
                to={item.page_url}
              >
                {item.page_name}
              </Link>
            );
          })}
          {user && (
            <div className="dropdown  dropdown-bottom dropdown-end">
              <label
                tabIndex={0}
                className="btn m-1 bg-yellow-400 ms-2 normal-case text-lg hover:bg-yellow-300 w-52"
              >
                Anonymous User
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu bg-transparent rounded-box w-52 "
              >
                <li>
                  <Link
                    className="btn bg-yellow-400 ms-2 normal-case text-xl hover:bg-yellow-300"
                    key={"logout"}
                    to={"/logout"}
                    onClick={()=>dispatch(logoutUser)}
                  >
                    {"logout"}
                  </Link>
                </li>
              </ul>
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
                <Link to="/" >Homepage</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
