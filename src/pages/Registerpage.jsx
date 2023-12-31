import { useEffect, useState } from "react";
import signinImage from "../assets/images/sign_in.svg";
import FormField from "../components/forms/FormField";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  password: "",
};

function Registerpage() {
  //Form values
  const [values, setValues] = useState(initialState);

  // Boolean to login user or register user
  const [login, setLogin] = useState(true);

  //user Redux store
  const { user, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  //handle the form data and update the fields
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  //handle the form submittion
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;
    if (!email || !password || (!login && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    // if login is true do not register but login the user
    if (login) {
      dispatch(loginUser({ email, password }));
      setValues(initialState);
      return;
    }
    dispatch(registerUser({ name, email, password }));
    setValues(initialState);
  };

  useEffect(() => {
    // if the user already exists then navigate out of login to dashboard
    if (user) {
      navigate("/dashboard/alljobs");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col lg:flex-row md:flex-row gap-5 w-full h-screen dark:text-white md:container items-center justify-evenly">
      {/* login/register page image */}
      <div className="hidden lg:contents">
        <img src={signinImage} alt="sign in image" className="w-1/2" />
      </div>

      {/* login/register form */}
      <span className="border border-gray-800 p-1 bg-gray-800 w-50 dark:bg-gray-500 lg:w-fit">
        {/* login and register form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 border p-2 md:p-5 lg:p-5  border-gray-800 bg-slate-200 dark:bg-gray-800"
        >
          <h4 className="text-lg font-semibold">
            {!login ? "Register" : "Login"}
          </h4>
          {/* name field */}
          {!login && (
            <FormField
              label="Name"
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
          )}
          {/* email field */}
          <FormField
            label="Email"
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />
          {/* password field */}
          <FormField
            label="Password"
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />
          {/* submit button */}
          <button
            type="submit"
            className="btn bg-gray-600 hover:bg-gray-800 border-2 border-gray-800 hover:border-gray-800 
            text-white w-fit p-2 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : login ? "Login" : "Signup"}
          </button>
        </form>

        {/* to switch from login and register page */}
        <p className="text-sm text-white text-center p-1">
          {login ? (
            <>
              {" "}
              Not a member ? {""}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setLogin(!login);
                  setValues({ ...values, password: "" });
                }}
                className="font-bold text-blue-400 dark:text-yellow-400"
              >
                Register here
              </button>
            </>
          ) : (
            <>
              {" "}
              Already a member ? {""}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setLogin(!login);
                  setValues({ ...values, password: "" });
                }}
                className="font-bold text-blue-400 dark:text-yellow-400"
              >
                Login here
              </button>
            </>
          )}
        </p>
      </span>

      {/* Test user login button */}
      <div className={`${login ? "visible" : "invisible"} text-center`}>
        <form>
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(
                loginUser({ email: "testUser@test.com", password: "secret" })
              );
            }}
            disabled={isLoading}
            className="btn text-black border border-orange-500 bg-orange-400 hover:bg-orange-500 hover:border-orange-500 hover:shadow-md m-5 lg:m-0"
          >
            Test User Login
          </button>
          <p className=" text-sm mt-5">
            You can test the app by logging in as test user.
          </p>
          <p className=" text-sm mt-5 text-red-600 font-bold">
            NOTE: THIS USER HAS READONLY ACCESS.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registerpage;
