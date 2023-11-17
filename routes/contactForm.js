const express = require("express");

const router = express.Router();
const {alldetails, enquiry} = require("../contactForm/controller/userdetails");
try {

    router.route("/alldetails").get(alldetails).post(enquiry);

} catch (error) {
    console.log(error);
}
module.exports = router;