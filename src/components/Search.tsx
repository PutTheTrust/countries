import { Search as SearchIcon } from "lucide-react";

import "./Search.scss";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByCountry } from "../store/slice/countrySlice";

const Search = () => {
  // const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(searchByCountry(e.target.value));
    // console.log(e.target.value);
  };
  return (
    <div className="search">
      <SearchIcon />
      <input
        role="search"
        className="search__input"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Search;
