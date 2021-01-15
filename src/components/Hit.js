import React from "react";
import { Link } from "react-router-dom";

const Hit = ({ hit }) => {
  return (
    <div>
      <Link to={`${hit.objectID}`}>
        <img src={hit.image} alt={hit.name} />
      </Link>
      <div>{hit.name}</div>
      {/* summary field is a string with html tags */}
      <div dangerouslySetInnerHTML={{ __html: hit.summary }}></div>
    </div>
  );
};

export default Hit;
