import React from "react";
const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa5">
      <input
        className="pa3 ba b--green bg-lightest-blue ba b--hot-pink"
        type="search"
        placeholder="Search"
        onChange={searchChange}
      />
    </div>
  );
};
export default SearchBox;
