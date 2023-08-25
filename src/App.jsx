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

function App() {
  return (
    <BrowserRouter>
      {/* main tab is to toggle between dark and light modes */}
      <main className="light">
        <div className=" bg-blue-200 dark:bg-gray-800">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/dashboard/" element={<DashboardMain></DashboardMain>}>
              <Route index element={<Stats></Stats>}></Route>
              <Route exact path="alljobs" element={<Alljobs></Alljobs>}></Route>
              <Route path="addjobs" element={<Addjobs></Addjobs>}></Route>
              <Route path="profile" element={<Profile></Profile>}></Route>
            </Route>
            <Route path="/error" element={<Errorpage></Errorpage>}></Route>
            <Route
              path="/register"
              element={<Registerpage></Registerpage>}
            ></Route>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
