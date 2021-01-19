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
  const conditionalInputStyles = !currentRefinement
    ? {
        borderRadius: "25px 0 0 25px",
      }
    : {
        borderRadius: "25px 0 0 0",
      };
  const conditionalBtnStyles = !currentRefinement
    ? {
        borderBottomRightRadius: "25px",
      }
    : {
        borderBottomRightRadius: "0",
      };

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
          {isSearchStalled ? (
            <img
              className="loader"
              style={{ color: "white", width: "100%", height: "100%" }}
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
