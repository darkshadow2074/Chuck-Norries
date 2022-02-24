import React, { useState, useEffect } from "react";
import axios from "axios";

import Joke from "./Joke";
import "./jokeCategory.css";

const JokeCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState("");
  const [jokeData, setJokeData] = useState("");
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [jokeLoading, setJokeLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setCategoryLoading(true);
        const { data } = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        setCategories(data);
        setCategoryLoading(false);
      } catch (e) {
        console.log(e);
      }
      setCategoryLoading(false);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        setJokeLoading(true);
        const { data } = await axios.get(
          `https://api.chucknorris.io/jokes/random?category=${selectedCategories}`
        );
        setJokeData(data.value);
        setJokeLoading(false);
      } catch (e) {
        console.log(e);
      }
      setJokeLoading(false);
    })();
  }, [selectedCategories]);

  const handleCategory = (e) => {
    setSelectedCategories(e.target.innerText);
  };
  const fetchNewJoke = async () => {
    try {
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${selectedCategories}`
      );
      setJokeData(data.value);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="joke-section">
      <h1 className="title">Select Your Category</h1>
      {categoryLoading ? (
        <h3 className="loading-message">Categories are loading...</h3>
      ) : (
        <div className="category-container">
          {categories.map((category, indx) => (
            <div className={`category${indx + 1}`}>
              <button
                className={
                  selectedCategories === category
                    ? "category-button selected"
                    : "category-button"
                }
                onClick={handleCategory}
              >
                <span className="category-name">{category}</span>
              </button>
            </div>
          ))}
        </div>
      )}
      <Joke
        jokeData={jokeData}
        selectedCategories={selectedCategories}
        jokeLoading={jokeLoading}
        fetchNewJoke={fetchNewJoke}
      />
    </div>
  );
};

export default JokeCategory;
