import React, { useState } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Stats, Hits } from "react-instantsearch-dom";

import Hit from "./Hit";
import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_KEY
);

const SearchView = () => {
  const [hitsPossible, setHitsPossible] = useState(false);

  return (
    <div className="container">
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.REACT_APP_ALGOLIA_INDEX}
      >
        <CustomSearchBox
          placeholder={"Search for an episode..."}
          handleInputChange={(keyword) => setHitsPossible(!!keyword)}
        />

        {hitsPossible && (
          <CustomHits
            hitComponent={Hit}
            hitsPossible={hitsPossible}
            //   hitsPossible={true}
          />
        )}
      </InstantSearch>
    </div>
  );
};

export default SearchView;
