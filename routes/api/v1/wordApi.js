const express = require("express");
const router = express.Router();
const wordController = require("../../../controller/api/v1/word_controller");

router.post("/create", wordController.create);
router.post("/search", wordController.search);
router.get("/get", wordController.getWord);
module.exports = router;
