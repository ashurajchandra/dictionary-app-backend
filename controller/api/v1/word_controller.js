const Words = require("../../../models/words_model");

const { default: axios } = require("axios");

const app_id = "55a07d83"; // insert your APP Id
const app_key = "8a7a8b212ea03a5eaca6d755c28959aa"; // insert your APP Key
const fields = "pronunciations";
const strictMatch = "false";

module.exports.create = async function (req, res) {
  try {
    console.log("body", req.body);
    const url = `https://od-api.oxforddictionaries.com/api/v2/entries/en-us/${req.body.word}`;
    console.log("url", url);
    let response = await axios.get(url, {
      headers: { app_id: app_id, app_key: app_key },
    });
    // let words = await Words.create(req.body);
    console.log("response", response.data);

    let data = await Words.create(response.data);
    return res.status(200).json({
      message: "word created succesfully",
      data: data,
    });
  } catch (err) {
    console.log("err", err);
    res.status(500).json({ message: "Internal server error", err });
  }
};

module.exports.search = async function (req, res) {
  try {
    console.log("body", req.body);
    let words = await Words.find({ word: req.body.word });
    console.log("words", words);

    return res.json(200, {
      message: "word created succesfully",
      data: words,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

module.exports.fetchWords = async function (req, res) {
  try {
    let words = await Words.find({});
    console.log("words", words);

    return res.json(200, {
      message: "words found succesfully",
      data: words,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};

module.exports.deleteWords = async function (req, res) {
  try {
    let word = await Words.findByIdAndDelete(req.params.id);
    console.log("word", word);

    return res.json(200, {
      message: "word deleted succesfully",
      data: word,
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", err });
  }
};
