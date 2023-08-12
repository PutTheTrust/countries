import { Search as SearchIcon } from "lucide-react";

import "./Search.scss";

const Search = () => {
  return (
    <div className="search">
      <SearchIcon />
      <input
        className="search__input"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
