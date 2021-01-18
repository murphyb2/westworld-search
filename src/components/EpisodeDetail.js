import React from "react";
import { Redirect, Link } from "react-router-dom";
import plusIcon from "../assets/plus.svg";
import { useEpisode } from "../context/EpisodeContext";

const EpisodeDetail = () => {
  const episode = useEpisode();

  return episode.objectID ? (
    <div
      className="container"
      style={{
        paddingTop: "2vh",
        paddingBottom: "2vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Link to="/">
        <button
          style={{
            margin: "1rem 0",
            padding: ".75rem",
            border: "none",
            borderRadius: "18px",
            backgroundColor: "var(--green)",
            color: "var(--white)",
            fontSize: "x-large",
          }}
        >
          <h5
            style={{
              margin: "0",
            }}
          >
            {"< Search Again"}
          </h5>
        </button>
      </Link>
      <h1 className="episodeDetail_title">{episode.name}</h1>
      <div className="episodeDetail_content">
        <img src={episode.image.original} alt="" />
        <div className="episodeDetail_body">
          <h2>{episode.summary}</h2>
          <div style={{ margin: "1.5rem 0" }}>
            Season {episode.season} / Episode {episode.episode}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "large",
            }}
          >
            <p>Airdate: {new Date(episode.airdate).toDateString()}</p>
            <p>Runtime: {episode.runtime} mins</p>
          </div>
        </div>
      </div>
      <a href={episode.url} target="_blank" rel="noreferrer">
        <button
          style={{
            margin: "6vh auto auto auto",
            backgroundColor: "var(--grey)",
            border: "none",
            color: "white",
            padding: "0.5rem 0.75rem",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "12px",
          }}
        >
          <h2 style={{ margin: "auto 0", paddingRight: ".75rem" }}>
            More Episode Detail
          </h2>
          <img src={plusIcon} alt="" />
        </button>
      </a>
    </div>
  ) : (
    <Redirect to="/" />
  );
};

export default EpisodeDetail;
