import { Link } from "react-router-dom";
import { sidenavlinks } from "./sidenavlinks";

function SideNavbar() {
  return (
    <div className="flex flex-col max-w-fit sm:flex-row bg-slate-100 h-screen">
      <ul className="menu ">
        {sidenavlinks &&
          sidenavlinks.map((item) => {
            return (
              <Link
                to={item.path_url}
                className="tooltip tooltip-right text-lg p-2 px-3 my-1 border bg-slate-200 hover:bg-slate-300 hover:shadow-md"
                data-tip={item.path_name}
                key={item.path_name}
              >
                <i className={item.icon}></i>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default SideNavbar;
