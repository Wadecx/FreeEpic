import React, { useState, useEffect } from "react";
import "../Style/fetcher.css";

const Fetcher = () => {
  const [games, setGames] = useState();

  const LoadGame = async () => {
    const response = await fetch(
      "https://epic-free-games.p.rapidapi.com/epic-free-games",
      {
        headers: {
          "X-RapidAPI-Key":
            "3e69724726mshc5df7367518804ep1dc553jsnd448e14d4724",
          "X-RapidAPI-Host": "epic-free-games.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    setGames(data);
  };

  useEffect(() => {
    LoadGame();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="overlay"></div>
        <div className="welcome_title">
          <h1>Free Games of the week</h1>
        </div>
        <div className="wrapper">
          {games &&
            games.map((data) => {
              return (
                <div className="gamesData">
                  <img src={data.offerImageTall} alt="GameImage" />
                  <h2>{data.name}</h2>
                  <h3>Editeur : {data.publisher}</h3>
                  <a href={data.appUrl} target="_blank">
                    Add to my library
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Fetcher;
