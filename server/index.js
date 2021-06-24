const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "gdzc08180914!",
  database: "crudtest",
});

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('inception', 'goooooooooood');";
  db.query(sqlInsert, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("run run run~");
  });
});
app.listen(3001, () => {
  console.log("3001 running...");
});
