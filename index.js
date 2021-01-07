const express = require("express");
const port = process.env.PORT || 8000;
const db = require("./config/mongoose");
const app = express();
app.use(express.urlencoded());

// handling cors

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/", require("./routes"));

//firing server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${err}`);
    return;
  }
  console.log(`Server is up and running on port: ${port}`);
});
