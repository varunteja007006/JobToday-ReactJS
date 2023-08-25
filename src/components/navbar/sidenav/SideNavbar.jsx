import { Link } from "react-router-dom";
import { sidenavlinks } from "./sidenavlinks";

function SideNavbar() {
  return (
    <div className="flex flex-col max-w-fit">
      <ul className="menu bg-white">
        {sidenavlinks &&
          sidenavlinks.map((item) => {
            return (
              <Link
                to={item.path_url}
                className="tooltip tooltip-right text-lg px-5 my-2"
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
