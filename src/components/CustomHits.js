import { connectHits, Stats } from "react-instantsearch-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import Hit from "./Hit";

const Hits = ({ hits, hitsPossible }) => (
  <div className="hits_container">
    <SimpleBar style={{ maxHeight: "60vh" }}>
      {hitsPossible && <Stats />}
      {hits.map((hit) => (
        <Hit key={hit.objectID} hit={hit} />
      ))}
    </SimpleBar>
  </div>
);

const CustomHits = connectHits(Hits);

export default CustomHits;
