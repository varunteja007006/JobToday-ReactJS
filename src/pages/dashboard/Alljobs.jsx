import JobsContainer from "../../components/alljobs/JobsContainer";
import SearchContainer from "../../components/alljobs/SearchContainer";
import PageContent from "../../components/dashboard/PageContent";
import PageTitle from "../../components/dashboard/PageTitle";
import "react-toastify/dist/ReactToastify.css";

function Alljobs() {
  return (
    <>
      <PageTitle title={"All Jobs"}></PageTitle>
      <PageContent>
        <SearchContainer></SearchContainer>
        <JobsContainer></JobsContainer>
      </PageContent>
    </>
  );
}

export default Alljobs;
