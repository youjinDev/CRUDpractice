const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = require("cors");

// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('all or nothing', 'the best');";
//   db.query(sqlInsert, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("run run run~");
//   });
// });

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "gdzc08180914!",
  database: "crudtest",
});

app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true })) 은 deprecated 되어서 express에서 대체 가능
app.use(express.urlencoded({ extended: true }));

// db에 쓰기
app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?,?)";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(result);
  });
});

//db에서 가져오기
app.get("/api/data", (req, res) => {
  const sqlSelect = "SELECT * FROM movie_reviews";
  db.query(sqlSelect, (err, result, field) =>
    err ? console.log("데이터 가져오기 실패") : res.send(result)
  );
});

app.get("/", (req, res) => res.send("잘 돌아가는 중..."));

app.listen(3001, () => {
  console.log("3001 running...");
});
