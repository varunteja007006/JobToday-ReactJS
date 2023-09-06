import { useDispatch, useSelector } from "react-redux";
import FormField from "../../components/forms/FormField";
import { useState } from "react";
import { SlPencil } from "react-icons/sl/index";
import PageTitle from "../../components/dashboard/PageTitle";
import PageContent from "../../components/dashboard/PageContent";
import { updateUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";

function Profile() {
  const { isloading, user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [editData, setEditData] = useState(false);
  const [userData, setUserData] = useState({
    name: user?.name,
    email: user?.email,
    lastName: user?.lastName,
    location: user?.location,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, location } = userData;
    if (!name || !email || !location) {
      toast.error("please fill out all fields");
      return;
    }
    dispatch(updateUser(userData));
    setEditData(!editData);
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageTitle title={"Profile"}></PageTitle>
      <PageContent>
        <div className="">
          {editData && (
            <div className="flex flex-col gap-2">
              <form
                className="flex flex-col gap-2 w-full lg:md:w-1/2"
                onSubmit={handleSubmit}
              >
                {/* label, type, name, value, handleChange */}
                {/* <FormField label={"Profile Pic"} name={"profile"} type={"file"}></FormField> */}
                <FormField
                  label={"Name"}
                  name={"name"}
                  type={"text"}
                  value={userData.name}
                  handleChange={handleChange}
                ></FormField>
                <FormField
                  label={"Email"}
                  name={"email"}
                  type={"text"}
                  value={userData.email}
                  handleChange={handleChange}
                ></FormField>
                <FormField
                  label={"Location"}
                  name={"location"}
                  type={"text"}
                  value={userData.location}
                  handleChange={handleChange}
                ></FormField>
                <button
                  type="submit"
                  className="bg-yellow-400 btn w-fit flex flex-row gap-2 hover:bg-yellow-500"
                >
                  {isloading ? "Please wait..." : "Save Changes"}
                </button>
              </form>
              <button
                onClick={() => setEditData(!editData)}
                className="bg-red-400 btn w-fit flex flex-row gap-2 hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          )}

          {!editData && (
            <div className="flex flex-col text-md lg:md:flex-col gap-5">
              <p>Name: {user.name} </p>
              <p>Email: {user.email} </p>
              <p>Location: {user.location} </p>
              <button
                onClick={() => setEditData(!editData)}
                className="bg-yellow-400 btn w-fit flex flex-row gap-2 hover:bg-yellow-500"
              >
                <SlPencil></SlPencil> Edit
              </button>
            </div>
          )}
        </div>
      </PageContent>
    </>
  );
}

export default Profile;
