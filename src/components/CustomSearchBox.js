import { connectSearchBox } from "react-instantsearch-dom";

import searchIcon from "../assets/search.svg";

const SearchBox = ({
  currentRefinement,
  isSearchStalled,
  refine,
  placeholder,
}) => (
  <form noValidate action="" role="search" className="searchbox">
    <input
      className="searchbox_input"
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
      placeholder={placeholder}
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

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
