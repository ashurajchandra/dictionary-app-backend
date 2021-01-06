const mongoose = require("mongoose");
const wordsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    results: {
      type: Array,
      required: true,
    },
    word: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Word = mongoose.model("Word", wordsSchema);

module.exports = Word;
