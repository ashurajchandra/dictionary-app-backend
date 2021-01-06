//setting up mongoose

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dictionary_model", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Succesfully connected to database");
});
