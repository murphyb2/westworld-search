import React from "react";
import EpisodeDetail from "./EpisodeDetail";

const DetailView = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--white)",
        margin: "4vh 4vw",
        borderRadius: "26px",
      }}
    >
      <EpisodeDetail />
    </div>
  );
};

export default DetailView;
