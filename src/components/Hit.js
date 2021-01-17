import React from "react";
import { Link } from "react-router-dom";

import { Highlight } from "react-instantsearch-dom";

import { useEpisodeUpdate } from "../context/EpisodeContext";

const Hit = ({ hit }) => {
  const updateEpisode = useEpisodeUpdate();

  return (
    <Link to={`${hit.objectID}`} onClick={() => updateEpisode(hit)}>
      <div className="hit_container">
        <img src={hit.image.medium} alt={hit.name} />
        <div className="hit_content">
          <div>
            <h3 className="hit_content_title">
              <Highlight hit={hit} tagName="strong" attribute={"name"} />
            </h3>
            <p>
              S{hit.season}/E{hit.episode}
            </p>
          </div>
          <div className="hit_body">
            <Highlight hit={hit} tagName="strong" attribute="summary" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Hit;
