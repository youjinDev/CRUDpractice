import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");

  const submitReview = () => {
    axios
      .post("http://localhost:3001/api/insert", {
        movieName: movieName,
        movieReview: review,
      })
      .then(() => {
        console.log("성공");
        alert("성공~!");
      });
  };

  useEffect(() => {
    // 여기에서 axios로 백엔드에 보냄
    submitReview();
  }, []);

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name :</label>
        <input
          type="text"
          name="Movie"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <label>Movie Review :</label>
        <input
          type="text"
          name="Review"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
        <button onClick={() => submitReview()}>Submit</button>
      </div>
    </div>
  );
}

export default App;
