import { Outlet } from "react-router-dom";
import SideNavbar from "../../components/navbar/sidenav/SideNavbar";

function DashboardMain() {
  return (
    <div className="flex flex-row">
      <SideNavbar></SideNavbar>
      <div className="min-h-screen w-screen md:px-5 pt-2 md:py-3">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default DashboardMain;
