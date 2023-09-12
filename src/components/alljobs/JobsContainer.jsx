import { toast } from "react-toastify";
import Jobs from "./Jobs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllJobs } from "../../features/alljobs/alljobsSlice";
import PaginationContainer from "./PaginationContainer";

function JobsContainer() {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.alljobs);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search, searchStatus, searchType, sort]);

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

  return (
    <div className="p-2 mb-5">
      <h3 className="text-xl font-semibold">
        {totalJobs} Job{jobs.length > 1 && "s"} Found
      </h3>
      <div className="flex flex-wrap flex-row gap-5 justify-normal">
        {jobs.map((job) => {
          return <Jobs key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PaginationContainer />}
    </div>
  );
}

export default JobsContainer;
