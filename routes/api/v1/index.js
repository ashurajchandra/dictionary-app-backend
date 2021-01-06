const express = require("express");
const router = express.Router();

router.use("/word", require("./wordApi"));
// router.use("/getWord", require("./getApi"));
// router.use("/searchWord", require("./searchApi"));
module.exports = router;
