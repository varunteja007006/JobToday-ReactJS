import { useEffect } from "react";
import PageTitle from "../../components/dashboard/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { showStats } from "../../features/alljobs/alljobsSlice";
import ChartsContainer from "../../components/stats/ChartsContainer";
import StatsContainer from "../../components/stats/StatsContainer";

function Stats() {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.alljobs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <>
        <span className="loading loading-spinner loading-lg"></span>
      </>
    );
  }

  return (
    <>
      <PageTitle title={"Stats"}></PageTitle>

      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
}

export default Stats;
