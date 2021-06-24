const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hellooooooo youjin!");
});
app.listen(3001, () => {
  console.log("3001 running...");
});
