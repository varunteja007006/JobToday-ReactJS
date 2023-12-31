import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Errorpage from "./pages/Errorpage";
import Registerpage from "./pages/Registerpage";
import DashboardMain from "./pages/dashboard/DashboardMain";
import Stats from "./pages/dashboard/Stats";
import Alljobs from "./pages/dashboard/Alljobs";
import Profile from "./pages/dashboard/Profile";
import Addjobs from "./pages/dashboard/Addjobs";
import Protectedpage from "./pages/Protectedpage";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

function App() {
  const { theme } = useSelector((store) => store.theme);

  return (
    <BrowserRouter>
      {/* main tag to toggle between dark and light modes */}
      <main className={` ${theme}`}>
        <div className="bg-blue-100 text-black dark:bg-gray-700 dark:text-white">
          {/* navigation bar */}
          <Navbar></Navbar>
          {/* routes to pages */}
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/error" element={<Errorpage></Errorpage>}></Route>
            <Route
              path="/register"
              element={<Registerpage></Registerpage>}
            ></Route>

            {/* After login routes */}
            <Route
              path="/dashboard/"
              element={
                <Protectedpage>
                  <DashboardMain></DashboardMain>
                </Protectedpage>
              }
            >
              <Route path="alljobs" element={<Alljobs></Alljobs>}></Route>
              <Route path="addjobs" element={<Addjobs></Addjobs>}></Route>
              <Route index path="stats" element={<Stats></Stats>}></Route>
              <Route path="profile" element={<Profile></Profile>}></Route>
            </Route>
          </Routes>
        </div>
      </main>
      <ToastContainer position="top-center" />
    </BrowserRouter>
  );
}

export default App;
