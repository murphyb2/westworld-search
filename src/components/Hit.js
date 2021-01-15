import React from "react";
import { Link } from "react-router-dom";

import { Highlight } from "react-instantsearch-dom";
import ReactHtmlParser from "react-html-parser";

import { useEpisodeUpdate } from "../context/EpisodeContext";

const Hit = ({ hit }) => {
  const updateEpisode = useEpisodeUpdate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Link to={`${hit.objectID}`}>
        <img
          src={hit.image.medium}
          alt={hit.name}
          onClick={() => updateEpisode(hit)}
        />
      </Link>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Highlight hit={hit} tagName="strong" attribute={"name"} />

          <div>
            S{hit.season}/E{hit.episode}
          </div>
        </div>
        {/* summary field is a string with html tags */}
        <div>{ReactHtmlParser(hit.summary)}</div>
      </div>
    </div>
  );
};

export default Hit;
