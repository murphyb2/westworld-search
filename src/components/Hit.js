import React from "react";
import { Link } from "react-router-dom";

import { Highlight } from "react-instantsearch-dom";
import ReactHtmlParser from "react-html-parser";

import { useEpisodeUpdate } from "../context/EpisodeContext";

const Hit = ({ hit }) => {
  const updateEpisode = useEpisodeUpdate();

  return (
    <Link to={`${hit.objectID}`} onClick={() => updateEpisode(hit)}>
      <div className="hit_container">
        <img src={hit.image.medium} alt={hit.name} />
        <div className="hit_content">
          <div>
            <h3>
              <Highlight hit={hit} tagName="strong" attribute={"name"} />
            </h3>
            <p>
              S{hit.season}/E{hit.episode}
            </p>
          </div>
          {/* summary field is a string with html tags */}
          <div className="hit_body">{ReactHtmlParser(hit.summary)}</div>
        </div>
      </div>
    </Link>
  );
};

export default Hit;
