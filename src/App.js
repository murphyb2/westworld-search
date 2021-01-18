// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import EpisodeProvider from "./context/EpisodeContext";

import SearchView from "./components/SearchView";
import Header from "./components/Header";
import DetailView from "./components/DetailView";

const App = () => {
  return (
    <>
      <Header />
      <EpisodeProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <SearchView />
            </Route>
            <Route path="/:objectID">
              <DetailView />
            </Route>
          </Switch>
        </Router>
      </EpisodeProvider>
    </>
  );
};

export default App;
