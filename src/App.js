// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import Hit from "./components/Hit";
import EpisodeDetail from "./components/EpisodeDetail";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_KEY
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div style={{ textAlign: "center" }}>
            <InstantSearch
              searchClient={searchClient}
              indexName={process.env.REACT_APP_ALGOLIA_INDEX}
            >
              <SearchBox
                translations={{
                  placeholder: "Search for a movie",
                }}
                showLoadingIndicator
              />
              <Hits hitComponent={Hit} />
            </InstantSearch>
          </div>
        </Route>
        <Route path="/:objectID">
          <EpisodeDetail />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
