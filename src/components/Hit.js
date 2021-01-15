import React from "react";
import { Link } from "react-router-dom";

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
          src={hit.image}
          alt={hit.name}
          onClick={() => updateEpisode(hit)}
        />
      </Link>
      <div>
        <div>{hit.name}</div>
        {/* summary field is a string with html tags */}
        <div dangerouslySetInnerHTML={{ __html: hit.summary }}></div>
      </div>
    </div>
  );
};

export default Hit;
