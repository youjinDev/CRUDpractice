import "./App.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const [movieName, setMovieName] = useState("");
  const [review, setReview] = useState("");
  const [movieData, setMovieData] = useState([]);
  const nameInput = useRef(null);
  const reviewInput = useRef(null);

  const submitReview = () => {
    if (movieName === "" || review === "") return;
    axios.post("http://localhost:3001/api/insert", {
      movieName: movieName,
      movieReview: review,
    });

    setMovieData([...movieData, { movieName, movieReview: review }]);
  };

  useEffect(() => {
    // 여기에서 axios로 백엔드에서 받음
    axios.get("http://localhost:3001/api/data").then((res) => {
      setMovieData(res.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name :</label>
        <input
          ref={nameInput}
          value={movieName}
          type="text"
          name="Movie"
          onChange={(e) => {
            setMovieName(e.target.value);
          }}
        />
        <label>Movie Review :</label>
        <input
          ref={reviewInput}
          value={review}
          type="text"
          name="Review"
          onChange={(e) => {
            setReview(e.target.value);
          }}
        />
        <button
          onClick={() => {
            submitReview();
            reviewInput.current.value = "";
            nameInput.current.value = "";
          }}
        >
          Submit
        </button>
      </div>
      <hr />
      <h1>Reviews</h1>
      <hr />
      <div>
        <ul className="cards_container">
          {movieData.map((review) => (
            <li className="card" key={review.id}>
              <h1 className="title">{review.movieName}</h1>
              <h3>{review.movieReview}</h3>
              <button className="delete_btn">delete</button>
              <div>
                <input
                  type="text"
                  placeholder="update..."
                  className="update_input"
                />
                <button>update</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
