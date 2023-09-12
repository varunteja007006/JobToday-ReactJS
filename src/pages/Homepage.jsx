import { Link, useNavigate } from "react-router-dom";
import banner from "../assets/images/interview.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function Homepage() {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/dashboard/alljobs");
    }
  }, [user, navigate]);

  return (
    <div className="flex lg:flex-row flex-col gap-5 w-full lg:h-screen h-fit items-center align-middle justify-center dark:text-white md:container">
      <h1 className="text-4xl font-bold mt-2 ">JobToday</h1>
      <img src={banner} alt="banner" className="w-1/2 h-1/2"></img>
      <div className="flex flex-col text-justify">
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque beatae
          culpa, quis rem libero velit facere asperiores dicta aperiam dolorem
          quasi! Tenetur rem quaerat omnis harum eaque saepe, nam nisi.
        </p>
        <p className="p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, aliquid
          eveniet? Numquam pariatur enim, consequatur hic accusamus quaerat,
          itaque nostrum corporis nihil delectus ratione mollitia architecto quo
          dicta vel. Necessitatibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Atque beatae culpa, quis rem libero velit facere
          asperiores dicta aperiam dolorem quasi! Tenetur rem quaerat omnis
          harum eaque saepe, nam nisi.
        </p>
        <Link
          to="/register"
          className="btn text-black bg-yellow-400 hover:bg-yellow-500 hover:shadow-md m-5 lg:m-0"
        >
          Get started
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
