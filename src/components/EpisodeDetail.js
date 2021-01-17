import React from "react";
import {
  Redirect,
  // useParams
} from "react-router-dom";

import { useEpisode } from "../context/EpisodeContext";

const EpisodeDetail = () => {
  //   const { objectID: id } = useParams();
  const episode = useEpisode();
  console.log(episode);
  return episode.objectID ? (
    <div>
      <h1>{episode.name}</h1>

      <img src={episode.image.medium} alt="" />
      <p>{episode.summary}</p>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default EpisodeDetail;
