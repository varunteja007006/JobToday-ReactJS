import { Link } from "react-router-dom";
import pagenotfound from "../assets/images/not-found.svg";
function Errorpage() {
  return (
    <div className="dark:text-white w-full h-screen flex flex-col gap-5 items-center justify-center">
      <img src={pagenotfound} alt="page not found" className="w-full h-1/2" />
      <p>Page not found 😢</p>
      <Link to="/" className="btn bg-yellow-400 hover:bg-yellow-300">
        Back to Home
      </Link>
    </div>
  );
}

export default Errorpage;
