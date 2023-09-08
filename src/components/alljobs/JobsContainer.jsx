import { toast } from "react-toastify";
import Jobs from "./Jobs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllJobs } from "../../features/alljobs/alljobsSlice";

function JobsContainer() {
  const { jobs, isLoading } = useSelector((store) => store.alljobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  //   if job results loading
  if (isLoading) {
    return (
      <>
        <span className="loading loading-spinner loading-lg"></span>
      </>
    );
  }

  //   if jobs are not found
  if (jobs.length === 0) {
    {
      toast.error("No jobs found...", { autoClose: 3000 });
    }
    return (
      <>
        <div className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>No jobs found...</span>
        </div>
      </>
    );
  }

  //   if jobs are found
  console.log(jobs);
  return (
    <div className="p-2 mb-5">
      <h3 className="text-xl ">Jobs</h3>
      <div className="flex flex-wrap flex-row gap-5 justify-normal">
        {jobs.map((job) => {
          return <Jobs key={job._id} {...job} />;
        })}
      </div>
    </div>
  );
}

export default JobsContainer;
