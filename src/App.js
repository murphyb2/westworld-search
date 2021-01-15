// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EpisodeProvider from "./context/EpisodeContext";

import EpisodeDetail from "./components/EpisodeDetail";

import SearchView from "./components/SearchView";

const App = () => {
  return (
    <EpisodeProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <SearchView />
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
