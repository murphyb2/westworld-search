import React, { useState, useEffect } from "react";
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
  const [inputStyles, setInputStyles] = useState("searchbox_input_unrefined");
  const [inputBtnStyles, setInputBtnStyles] = useState(
    "searchbox_button_unrefined"
  );
  useEffect(() => {
    !currentRefinement
      ? setInputStyles("searchbox_input_unrefined")
      : setInputStyles("searchbox_input_refined");

    !currentRefinement
      ? setInputBtnStyles("searchbox_button_unrefined")
      : setInputBtnStyles("searchbox_button_refined");
  }, [currentRefinement]);

  return (
    <form noValidate action="" role="search" className="searchbox">
      <input
        className={`searchbox_input ${inputStyles}`}
        type="search"
        value={currentRefinement}
        onChange={(event) => {
          handleInputChange(event.currentTarget.value);
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
        className={`searchbox_button ${inputBtnStyles}`}
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
