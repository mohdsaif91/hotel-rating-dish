import React from "react";
import "./App.css";
import axios from "axios";
import Header from "./Pages/Header";
// import { Router } from "rea";

function App() {
  const getPrint = async () => {
    console.log("called");
    await axios
      .get("/api/v1/emojis/getUser")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        throw error;
      });
  };
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
