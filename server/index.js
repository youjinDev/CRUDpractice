const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "gdzc08180914!",
  database: "crudtest",
});

// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('all or nothing', 'the best');";
//   db.query(sqlInsert, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("run run run~");
//   });
// });

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(result);
  });
});

app.listen(3001, () => {
  console.log("3001 running...");
});
