import { connectHits } from "react-instantsearch-dom";
import Hit from "./Hit";

const Hits = ({ hits, hitsPossible }) => (
  <div className="hits_container">
    {hitsPossible && hits.map((hit) => <Hit key={hit.objectID} hit={hit} />)}
  </div>
);

const CustomHits = connectHits(Hits);

export default CustomHits;