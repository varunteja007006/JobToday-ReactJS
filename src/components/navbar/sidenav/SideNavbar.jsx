import { Link } from "react-router-dom";
import { sidenavlinks } from "./sidenavlinks";

function SideNavbar() {
  return (
    <div className="hidden lg:flex lg:flex-col gap-2 min-h-screen md:w-40 md:w-75 bg-slate-100 dark:bg-cyan-900 dark:text-black">
      {sidenavlinks &&
        sidenavlinks.map((item) => {
          return (
            <div key={item.path_name} className="mx-2 ">
              <Link
                to={item.path_url}
                className="tooltip tooltip-right text-md border-2 border-slate-300 bg-slate-200 hover:bg-slate-300 hover:shadow-md p-2 w-full"
                data-tip={item.path_name}
              >
                <i className={item.class_name}></i>{" "}
                <span className="ms-1">{item.path_name}</span>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default SideNavbar;
