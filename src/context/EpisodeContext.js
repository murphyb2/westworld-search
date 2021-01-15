import React, { useState, createContext, useContext } from "react";

const EpisodeContext = createContext();
const EpisodeUpdateContext = createContext();

export const useEpisode = () => useContext(EpisodeContext);
export const useEpisodeUpdate = () => useContext(EpisodeUpdateContext);

const EpisodeProvider = ({ children }) => {
  const [episode, setEpisode] = useState({});

  const updateEpisode = (ep) => setEpisode(ep);

  return (
    <EpisodeContext.Provider value={episode}>
      <EpisodeUpdateContext.Provider value={updateEpisode}>
        {children}
      </EpisodeUpdateContext.Provider>
    </EpisodeContext.Provider>
  );
};

export default EpisodeProvider;
