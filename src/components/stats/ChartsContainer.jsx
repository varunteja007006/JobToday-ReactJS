import { useState } from "react";
import { useSelector } from "react-redux";
import BarChart from "./charts/BarChart";
import AreaChart from "./charts/AreaChart";

function ChartsContainer() {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useSelector((store) => store.alljobs);
  return (
    <div className="mt-10 bg-white dark:bg-gray-300 text-black p-5">
      <h4 className="text-xl font-semibold">Monthly Applications</h4>
      <p>
        Switch to :
        <span>
          <button className="btn m-3 text-black bg-yellow-300 hover:shadow-md hover:bg-yellow-400" type="button" onClick={() => setBarChart(!barChart)}>
            {barChart ? "Area Chart" : "Bar Chart"}
          </button>
        </span>
      </p>

      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </div>
  );
}

export default ChartsContainer;
