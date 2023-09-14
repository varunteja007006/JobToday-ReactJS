import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../features/alljobs/alljobsSlice";

function PaginationContainer() {
  const { numOfPages, page } = useSelector((store) => store.alljobs);
  const dispatch = useDispatch();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    dispatch(changePage(newPage));
  };
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
  };
  return (
    <>
      <div className="flex flex-wrap md:join gap-1 ">
        <button
          className="join-item btn btn-outline text-black bg-sky-200 border-1 border-black shadow-lg"
          onClick={prevPage}
        >
          Previous page
        </button>
        {pages.map((pageNumber) => {
          return (
            <button
              type="button"
              className={
                `join-item btn btn-ghost bg-sky-100 border-1 border-black ` +
                (pageNumber === page ? "btn-active" : "shadow-lg")
              }
              key={pageNumber}
              onClick={() => dispatch(changePage(pageNumber))}
            >
              {pageNumber}
            </button>
          );
        })}
        <button
          className="join-item btn btn-outline text-black border-1 border-black bg-sky-200 shadow-lg"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default PaginationContainer;
