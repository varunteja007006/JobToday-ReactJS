import { useEffect, useState } from "react";
import signinImage from "../assets/images/sign_in.svg";
import FormField from "../components/forms/FormField";
import Errormessage from "../components/messages/Errormessage";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

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

  // To trigger errors
  const [errorMessageTrigger, setErrorMessageTrigger] = useState(false);

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
      setErrorMessageTrigger(true);
      return;
    }
    if (login) {
      dispatch(loginUser({ email, password }));
      setErrorMessageTrigger(false);
      setValues(initialState);
      return;
    }
    dispatch(registerUser({ name, email, password }));
    setErrorMessageTrigger(false);
    setValues(initialState);
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard/alljobs");
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col lg:flex-row md:flex-row gap-5 w-full h-screen dark:text-white lg:md:container items-center justify-evenly">
      {/* login/register page image */}
      <div className="hidden lg:contents">
        <img src={signinImage} alt="sign in image" className="w-1/2" />
      </div>

      {/* login/register form */}
      <span className="border border-gray-800 p-1 bg-gray-800 w-50 dark:bg-gray-500 lg:w-fit">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 border p-2 md:p-5 lg:p-5  border-gray-800 bg-slate-200 dark:bg-gray-800"
        >
          <h4 className="text-lg font-semibold">
            {!login ? "Register" : "Login"}
          </h4>

          {!login && (
            <>
              <FormField
                label="Name"
                type="text"
                name="name"
                value={values.name}
                handleChange={handleChange}
              />
            </>
          )}

          <FormField
            label="Email"
            type="email"
            name="email"
            value={values.email}
            handleChange={handleChange}
          />

          <FormField
            label="Password"
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />

          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white w-fit p-2  dark:bg-gray-300 dark:text-black"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </form>

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

      {/* login/register error messages */}
      {errorMessageTrigger && (
        <Errormessage
          message={"Fill all the required fields"}
          setErrorMessageTrigger={setErrorMessageTrigger}
        ></Errormessage>
      )}
    </div>
  );
}

export default Registerpage;
