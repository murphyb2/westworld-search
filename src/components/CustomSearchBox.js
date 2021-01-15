import { connectSearchBox } from "react-instantsearch-dom";

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form
    style={{
      display: "flex",
      flexDirection: "row",
      margin: "1rem",
    }}
    noValidate
    action=""
    role="search"
  >
    <input
      style={{
        flexGrow: "1",
      }}
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
    <button onClick={() => refine("")}>Reset query</button>
    {isSearchStalled ? "My search is stalled" : ""}
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
