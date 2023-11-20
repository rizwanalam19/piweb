const express = require("express");

const router = express.Router();
const about = require("../Aboutus/controller/about");
try {
    router.route("/about").get(about);
} catch (error) {
    console.log(error);
}
module.exports = router;