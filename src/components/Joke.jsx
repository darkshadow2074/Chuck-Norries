import React from "react";

import "./jokeCategory.css";
const Joke = ({ jokeData, selectedCategories, jokeLoading, fetchNewJoke }) => {
  return (
    <>
      {jokeData && (
        <div className="joke-container">
          <h2 className="selected-title">
            Selected Category : {selectedCategories.toUpperCase()}
          </h2>
          {jokeLoading ? (
            <h3 className="loading-message">Joke is on the way...</h3>
          ) : (
            <>
              <div className="joke">{jokeData}</div>{" "}
              <button className="btn-new" onClick={fetchNewJoke}>
                New Joke
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Joke;
