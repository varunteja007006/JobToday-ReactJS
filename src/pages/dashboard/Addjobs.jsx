import PageTitle from "../../components/dashboard/PageTitle";
import PageContent from "../../components/dashboard/PageContent";
import { useDispatch, useSelector } from "react-redux";
import FormField from "../../components/forms/FormField";
import FormSelect from "../../components/forms/FormSelect";
import {
  clearValues,
  createJob,
  handleChange,
} from "../../features/job/jobSlice";
import { toast } from "react-toastify";

function Addjobs() {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
    dispatch(createJob({ position, company, jobLocation }));
  };

  const handleInput = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  return (
    <>
      <PageTitle title={"Add Jobs"}></PageTitle>
      <PageContent>
        <p> Add or edit jobs here.</p>
        <div className="lg:md:w-1/2 w-full">
          <form onSubmit={handleSubmit} className="flex flex-col gap-1">
            {/* position field */}
            <FormField
              label={"Position"}
              type={"text"}
              name={"position"}
              value={position}
              handleChange={handleInput}
            ></FormField>

            {/* company field */}
            <FormField
              label={"Company"}
              type={"text"}
              name={"company"}
              value={company}
              handleChange={handleInput}
            ></FormField>

            {/* jobLocation field */}
            <FormField
              label={"Job Location"}
              type={"text"}
              name={"jobLocation"}
              value={jobLocation}
              handleChange={handleInput}
            ></FormField>

            {/* status field */}
            <FormSelect
              label={"Status"}
              name={"status"}
              value={status}
              optionList={statusOptions}
              handleChange={handleInput}
            ></FormSelect>

            {/* job type field */}
            <FormSelect
              label={"Job Type"}
              name={"jobType"}
              value={jobType}
              optionList={jobTypeOptions}
              handleChange={handleInput}
            ></FormSelect>

            {/* submit button */}
            <button
              type="button"
              className="btn mt-2 bg-cyan-400 hover:bg-cyan-500 hover:shadow-md w-fit"
              disabled={isLoading}
              onClick={() => {
                dispatch(clearValues());
              }}
            >
              Clear
            </button>
            <button
              type="submit"
              className="btn mt-2 bg-yellow-400 hover:bg-yellow-500 hover:shadow-md w-fit"
              disabled={isLoading}
            >
              {isLoading ? "Loading" : "Add Job/Edit Job"}
            </button>
          </form>
        </div>
      </PageContent>
    </>
  );
}

export default Addjobs;
