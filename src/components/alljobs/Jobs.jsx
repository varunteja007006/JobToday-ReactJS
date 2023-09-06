function Jobs({
  company,
  createdAt,
  jobLocation,
  jobType_id,
  position,
  status,
}) {
  const date = new Date(createdAt);
  const modified_date =
    date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

  return (
    <>
      <div className="card w-1/4 border bg-zinc-100 border-gray-500 shadow-lg my-4 dark:border-white dark:bg-cyan-800 dark:text-white">
        <div className="card-body">
          <h2 className="card-title">{position}</h2>
          {status ? (
            <div className="badge bg-green-500">{status}</div>
          ) : (
            <div className="badge bg-red-500">{status}</div>
          )}

          <p className="text-md">{company}</p>
          <p className="text-sm">{jobLocation}</p>
          <p className="text-sm">Posted on: {modified_date}</p>
          <div className="card-actions justify-between">
            <button className="btn bg-red-400 hover:bg-red-500">Delete</button>
            <button className="btn bg-yellow-400 hover:bg-yellow-500">
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
