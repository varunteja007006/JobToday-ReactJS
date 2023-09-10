/* eslint-disable react/prop-types */
function StatCard({ title, count, icon, cardClass, countClass }) {
  return (
    <div>
      <div className="card w-96 ">
        <div className={`card-body rounded-lg mr-3 ${cardClass}`}>
          <span className="flex flex-row items-center justify-between">
            <h2 className="card-title capitalize dark:text-black">{title}</h2>
            <span className="border border-black px-3 py-2 dark:text-black bg-white">
              <i className={`text-2xl ${icon}`}></i>
            </span>
          </span>
          <span className={`border rounded-full w-fit font-semibold px-3 py-2 ${countClass}`}>
            <p>{count}</p>
          </span>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
