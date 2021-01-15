// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Stats, Hits } from "react-instantsearch-dom";

import EpisodeProvider from "./context/EpisodeContext";

import Hit from "./components/Hit";
import EpisodeDetail from "./components/EpisodeDetail";
import CustomSearchBox from "./components/CustomSearchBox";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_KEY
);

const App = () => {
  return (
    <EpisodeProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <div>
              <InstantSearch
                searchClient={searchClient}
                indexName={process.env.REACT_APP_ALGOLIA_INDEX}
              >
                <CustomSearchBox
                  translations={{
                    placeholder: "Search for a movie",
                  }}
                />
                <Stats />
                <Hits hitComponent={Hit} />
              </InstantSearch>
            </div>
          </Route>
          <Route path="/:objectID">
            <EpisodeDetail />
          </Route>
        </Switch>
      </Router>
    </EpisodeProvider>
  );
};

export default App;
