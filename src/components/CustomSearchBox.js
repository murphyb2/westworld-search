import React, { useEffect } from "react";
import { connectSearchBox } from "react-instantsearch-dom";

import searchIcon from "../assets/search.svg";
import spinner from "../assets/spinner.svg";

const SearchBox = ({
  currentRefinement,
  isSearchStalled,
  refine,
  placeholder,
  handleInputChange,
  inputRef,
}) => {
  useEffect(() => {
    handleInputChange(currentRefinement);
  }, [currentRefinement, handleInputChange]);
  return (
    <form noValidate action="" role="search" className="searchbox">
      <input
        className="searchbox_input"
        type="search"
        value={currentRefinement}
        onChange={(event) => {
          // console.log("change", event.currentTarget.value);
          // handleInputChange(event.currentTarget.value);
          refine(event.currentTarget.value);
        }}
        placeholder={placeholder}
        ref={inputRef}
      />

      <button
        onClick={(e) => {
          e.preventDefault();
          refine("");
        }}
        className="searchbox_button"
      >
        <div
          style={{
            width: "75%",
            margin: "auto",
          }}
        >
          {isSearchStalled ? (
            <img
              className="loader"
              style={{ color: "white", width: "100%", height: "" }}
              src={spinner}
              alt=""
            />
          ) : (
            <img
              style={{ width: "100%", height: "auto" }}
              src={searchIcon}
              alt=""
            />
          )}
        </div>
      </button>
    </form>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
