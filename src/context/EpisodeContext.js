import React, { useState, createContext, useContext } from "react";
import algoliasearch from "algoliasearch/lite";

const searchClient = algoliasearch(
  process.env.REACT_APP_ALGOLIA_APP_ID,
  process.env.REACT_APP_ALGOLIA_ADMIN_KEY
);

const index = searchClient.initIndex(process.env.REACT_APP_ALGOLIA_INDEX);

const EpisodeContext = createContext();
const EpisodeUpdateContext = createContext();
const FindEpisodeContext = createContext();

export const useEpisode = () => useContext(EpisodeContext);
export const useEpisodeUpdate = () => useContext(EpisodeUpdateContext);
export const useFindEpisode = () => useContext(FindEpisodeContext);

const EpisodeProvider = ({ children }) => {
  const [episode, setEpisode] = useState({});

  const updateEpisode = ep => setEpisode(ep);
  const findEpisode = async id => {
    const ep = await index.search("", {
      facetFilters: `objectID:${id}`,
    });
    setEpisode(ep.hits[0]);
  };

  return (
    <EpisodeContext.Provider value={episode}>
      <EpisodeUpdateContext.Provider value={updateEpisode}>
        <FindEpisodeContext.Provider value={findEpisode}>
          {children}
        </FindEpisodeContext.Provider>
      </EpisodeUpdateContext.Provider>
    </EpisodeContext.Provider>
  );
};

export default EpisodeProvider;
