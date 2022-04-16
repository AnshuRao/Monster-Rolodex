import React from "react";
import "./search-box.style.css";
 
export const SearchBox = ({ placeholder, searchHandler }) => {
  return (
    <input
      className="search"
      placeholder={placeholder}
      type="search"
      onChange={searchHandler}
    />
  );
};
