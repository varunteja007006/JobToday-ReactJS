import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboardpage from "./pages/Dashboardpage";
import Errorpage from "./pages/Errorpage";
import Registerpage from "./pages/Registerpage";

function App() {
  return (
    <BrowserRouter>
      {/* main tab is to toggle between dark and light modes */}
      <main className="light">
        <div className=" bg-blue-200 dark:bg-gray-800">
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route
              path="/dashboard"
              element={<Dashboardpage></Dashboardpage>}
            ></Route>
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
