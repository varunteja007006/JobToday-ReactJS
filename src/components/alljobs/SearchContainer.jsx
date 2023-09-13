import { useDispatch, useSelector } from "react-redux";
import FormField from "../forms/FormField";
import FormSelect from "../forms/FormSelect";
import {
  handleChange,
  clearFilters,
} from "../../features/alljobs/alljobsSlice";
import { useMemo, useState } from "react";

function SearchContainer() {
  const { isLoading, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.alljobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const [localSearch, setLocalSearch] = useState("");

  const handleSearch = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  const debounce = () => {
    let timeoutID;
    return (e) => {
      setLocalSearch(e.target.value);
      clearTimeout(timeoutID);
      timeoutID = setTimeout(() => {
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
      }, 1000);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocalSearch("");
    dispatch(clearFilters());
  };

  const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <div className="p-2 mb-5">
      <h3 className="text-xl font-semibold mb-3">Search</h3>
      <form className="flex flex-wrap flex-col md:flex-row items-center gap-3 bg-slate-300 rounded-lg p-3 shadow-md">
        <FormField
          label={"Search"}
          type={"text"}
          name={"search"}
          value={localSearch}
          handleChange={optimizedDebounce}
        ></FormField>
        <FormSelect
          label={"Status"}
          name={"searchStatus"}
          value={searchStatus}
          optionList={["all", ...statusOptions]}
          handleChange={handleSearch}
        ></FormSelect>
        {/* search by type */}
        <FormSelect
          label="type"
          name="searchType"
          value={searchType}
          optionList={["all", ...jobTypeOptions]}
          handleChange={handleSearch}
        />
        {/* sort */}
        <FormSelect
          label="sort"
          name="sort"
          value={sort}
          optionList={sortOptions}
          handleChange={handleSearch}
        />
        <button
          type="button"
          disabled={isLoading}
          onClick={handleSubmit}
          className="bg-red-400 btn w-fit flex flex-row gap-2 hover:bg-red-500"
        >
          clear filters
        </button>
      </form>
    </div>
  );
}

export default SearchContainer;
