import React, { useState, useRef, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";
import { CSSTransition } from "react-transition-group";

import Hit from "./Hit";
import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_KEY
);

const SearchView = () => {
  // Autofocus on search input
  const [hitsPossible, setHitsPossible] = useState(false);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const nodeRef = useRef(null);

  return (
    <div className="container">
      <InstantSearch
        searchClient={searchClient}
        indexName={process.env.REACT_APP_ALGOLIA_INDEX}
      >
        <CustomSearchBox
          placeholder={"Search for an episode..."}
          handleInputChange={(keyword) => setHitsPossible(!!keyword)}
          inputRef={inputRef}
        />

        <div style={{ overflow: "hidden" }}>
          <CSSTransition
            in={hitsPossible}
            timeout={500}
            unmountOnExit
            classNames="hits-list"
            nodeRef={nodeRef}
          >
            <div
              className="hits"
              ref={nodeRef}
              style={{
                overflow: "hidden",
              }}
            >
              <CustomHits hitComponent={Hit} hitsPossible={hitsPossible} />
            </div>
          </CSSTransition>
        </div>
      </InstantSearch>
    </div>
  );
};

export default SearchView;
