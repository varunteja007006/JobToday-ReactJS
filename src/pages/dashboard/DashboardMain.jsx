import { Outlet } from "react-router-dom";
import SideNavbar from "../../components/navbar/sidenav/SideNavbar";

function DashboardMain() {
  return (
    <div className="flex flex-row gap-5">
      <SideNavbar></SideNavbar>
      <div className="my-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default DashboardMain;
