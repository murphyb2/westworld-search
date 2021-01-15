import React from "react";
import {
  Redirect,
  // useParams
} from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

import { useEpisode } from "../context/EpisodeContext";

const EpisodeDetail = () => {
  //   const { objectID: id } = useParams();
  const episode = useEpisode();
  console.log(episode);
  return episode.objectID ? (
    <div>
      <h1>{episode.name}</h1>

      <img src={episode.image.medium} alt="" />
      {/* <div dangerouslySetInnerHTML={{ __html: episode.summary }}></div> */}
      <div>{ReactHtmlParser(episode.summary)}</div>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default EpisodeDetail;
