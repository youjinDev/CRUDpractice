import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Movie Name :</label>
        <input type="text" name="Movie" />
        <label>Movie Review :</label>
        <input type="text" name="Review" />
        <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
