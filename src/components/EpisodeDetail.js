import React from "react";
import {
  Redirect,
  // useParams
} from "react-router-dom";
import { useEpisode } from "../context/EpisodeContext";

const EpisodeDetail = () => {
  //   const { objectID: id } = useParams();
  const episode = useEpisode();
  return episode.objectID ? <div>{episode.name}</div> : <Redirect to="/" />;
};

export default EpisodeDetail;
