import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import "./App.css";

import { Home, Cart, Error } from "./pages";

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

  useEffect(() => {
    getData();
  }, []);

  return (
    // <main>
    //   <NavBar />
    //   <div className="container">
    //     {moviesData.map((data, index) => (
    //       <div key={index}>
    //         <h5>{data.movie}</h5>
    //         <p>{data.year}</p>
    //         <p>{data.price}</p>
    //         <p>{data.stock}</p>
    //         {data.genre.map((item, index) => (
    //           <p key={index}>{item}</p>
    //         ))}
    //       </div>
    //     ))}
    //   </div>
    // </main>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
