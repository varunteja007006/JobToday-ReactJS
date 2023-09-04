import { Link } from "react-router-dom";
import { sidenavlinks } from "./sidenavlinks";

function SideNavbar() {
  return (
    <div className="flex flex-col lg:md:flex-col h-screen w-40 lg:md:w-75 bg-slate-100 dark:bg-cyan-900 dark:text-black">
      {sidenavlinks &&
        sidenavlinks.map((item) => {
          return (
            <div key={item.path_name} className="p-1">
              <Link
                to={item.path_url}
                className="tooltip tooltip-right text-md border-2 border-slate-300 bg-slate-200 hover:bg-slate-300 hover:shadow-md p-2 w-full"
                data-tip={item.path_name}
              >
                <i className={item.icon}></i> <span>{item.path_name}</span>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default SideNavbar;
