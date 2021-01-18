import { connectSearchBox } from "react-instantsearch-dom";

import searchIcon from "../assets/search.svg";

const SearchBox = ({
  currentRefinement,
  isSearchStalled,
  refine,
  placeholder,
  handleInputChange,
  inputRef,
}) => {
  const conditionalInputStyles = !currentRefinement
    ? {
        borderBottom: "none",
        borderRadius: "none",
        borderBottomLeftRadius: "25px",
      }
    : {};
  const conditionalBtnStyles = !currentRefinement
    ? {
        borderBottomRightRadius: "25px",
      }
    : {};

  return (
    <form noValidate action="" role="search" className="searchbox">
      <input
        style={conditionalInputStyles}
        className="searchbox_input"
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
        style={conditionalBtnStyles}
        className="searchbox_button"
      >
        <div
          style={{
            width: "75%",
            margin: "auto",
          }}
        >
          <img
            style={{ width: "100%", height: "100%" }}
            src={searchIcon}
            alt=""
          />
        </div>
      </button>
      {isSearchStalled ? "My search is stalled" : ""}
    </form>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
