import React from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Stats, Hits } from "react-instantsearch-dom";

import Hit from "./Hit";
import CustomSearchBox from "./CustomSearchBox";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_KEY
);

const SearchView = () => {
  return (
    <div className="container">
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.REACT_APP_ALGOLIA_INDEX}
      >
        <CustomSearchBox
          //   translations={{
          placeholder={"Search for a movie..."}
          //   }}
        />
        <Stats />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </div>
  );
};

export default SearchView;
