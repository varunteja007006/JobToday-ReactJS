import { useSelector } from "react-redux";
import StatCard from "./StatCard";

function StatsContainer() {
  const { stats } = useSelector((store) => store.alljobs);

  const defaultStats = [
    {
      title: "pending applications",
      count: stats.pending || 0,
      icon: "fa-solid fa-spinner",
      cardClass: "border-2 border-orange-400 bg-orange-300",
      countClass: "border-2 border-orange-600 bg-orange-400",
    },
    {
      title: "interviews scheduled",
      count: stats.interview || 0,
      icon: "fa-regular fa-circle-check",
      cardClass: "border-2 border-green-400 bg-green-300",
      countClass: "border-2 border-green-600 bg-green-400",
    },
    {
      title: "jobs declined",
      count: stats.declined || 0,
      icon: "fa-solid fa-ban",
      cardClass: "border-2 border-red-400 bg-red-300",
      countClass: "border-2 border-red-600 bg-red-400",
    },
  ];
  return (
    <div className="flex flex-col gap-2 mx-4 md:mx-0 lg:m-0 lg:flex-row lg:flex-wrap">
      {defaultStats.map((item, index) => {
        return <StatCard key={index} {...item} />;
      })}
    </div>
  );
}

export default StatsContainer;
