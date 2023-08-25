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
    navigate("/");
  }, [user, navigate]);

  return (
    <div className="flex flex-row gap-5 w-full h-screen dark:text-white lg:md:container items-center justify-evenly">
      <img src={signinImage} alt="sign in image" className="w-1/2" />
      <span className="border border-gray-800 p-1 bg-gray-800">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 border p-5 border-gray-800 bg-slate-200"
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

          {/* <label>{name}</label>
          <input
            className="border border-gray-500"
            onChange={handleChange}
            type="text"
            name="name"
            value={values.name}
          /> */}

          <FormField
            label="Password"
            type="password"
            name="password"
            value={values.password}
            handleChange={handleChange}
          />

          <button
            type="submit"
            className="bg-gray-800 hover:bg-gray-700 text-white w-fit p-2"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>

          <p className="text-sm">
            {login ? (
              <>
                {" "}
                Not a member ? {""}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setLogin(!login);
                  }}
                  className="font-bold text-blue-800"
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
                  }}
                  className="font-bold text-blue-800"
                >
                  Login here
                </button>
              </>
            )}
          </p>
        </form>
      </span>
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
