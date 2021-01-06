const express = require("express");
const port = 8000;
const db = require("./config/mongoose");
const app = express();
app.use(express.urlencoded());
app.use("/", require("./routes"));

//firing server
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server ${err}`);
    return;
  }
  console.log(`Server is up and running on port: ${port}`);
});
