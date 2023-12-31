import moment from "moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteJob, setEditJob } from "../../features/job/jobSlice";

Jobs.propTypes = {
  _id: PropTypes.any,
  company: PropTypes.any,
  createdAt: PropTypes.any,
  jobLocation: PropTypes.any,
  jobType: PropTypes.any,
  position: PropTypes.any,
  status: PropTypes.any,
};

function Jobs({
  _id,
  company,
  createdAt,
  jobLocation,
  jobType,
  position,
  status,
}) {
  const date = moment(createdAt).format("MMM Do, YYYY");

  const dispatch = useDispatch();

  return (
    <>
      <div className="card border bg-zinc-100 border-gray-500 shadow-lg my-4 dark:border-white dark:bg-cyan-800 dark:text-white w-full md:w-80">
        <div className="card-body">
          <span className=" border-b-2 border-zinc-400 pb-2">
            <h4 className="card-title">{position}</h4>

            <span className="flex flex-row">
              <p className="text-md">
                <i className="fa-solid fa-building"></i> {company}
              </p>{" "}
              {status == "pending" ? (
                <div className="badge text-black py-3 capitalize bg-orange-400">
                  {status}
                </div>
              ) : (
                ""
              )}
              {status == "interview" ? (
                <div className="badge text-black py-3 capitalize bg-green-400">
                  {status}
                </div>
              ) : (
                ""
              )}
              {status == "declined" ? (
                <div className="badge text-black py-3 capitalize bg-red-400">{status}</div>
              ) : (
                ""
              )}
            </span>
          </span>

          <span className="grid grid-cols-2 gap-3 py-2">
            <p className="text-sm">
              <i className="fa-solid fa-location-dot"></i> {jobLocation}
            </p>

            <p className="text-sm">
              <i className="fa-solid fa-briefcase"></i> {jobType}
            </p>

            <p className="text-sm">
              <i className="fa-solid fa-calendar"></i> {date ?? ""}
            </p>
          </span>

          <div className="card-actions justify-start">
            <button
              onClick={() => {
                dispatch(deleteJob(_id));
              }}
              className="btn text-black bg-red-400 hover:bg-red-500 hover:shadow-md"
            >
              Delete
            </button>

            <Link
              to="/dashboard/addjobs"
              className="btn text-black bg-yellow-400 hover:bg-yellow-500 hover:shadow-md"
              onClick={() => {
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                );
              }}
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
