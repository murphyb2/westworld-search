import React from "react";
import { Link, useParams } from "react-router-dom";

const EpisodeDetail = () => {
  const { objectID: id } = useParams();

  return <div>{id}</div>;
};

export default EpisodeDetail;
