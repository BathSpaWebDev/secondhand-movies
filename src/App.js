import React, { useState, useEffect } from "react";

const App = () => {
  const [moviesData, setMoviesData] = useState([]);

  const getData = () => {
    fetch("movies.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(data => setMoviesData(data));
  };

  console.log(moviesData);

  useEffect(() => {
    getData();
  }, []);

  return <div></div>;
};

export default App;
