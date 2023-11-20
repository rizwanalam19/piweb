require("dotenv").config();
const express = require('express');
const cors = require('cors');
const ejs = require("ejs");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
app.use(express.json());
const user_details = require("../routes/contactForm");
const db = require("../db/conn");
const static_path = path.join(__dirname, "../public");
app.set("view engine", "ejs");
var bodyParser = require("body-parser");
const partial_path = path.join(__dirname, "../templates/components");
app.use(express.urlencoded({
  extended: false
}));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(static_path));
app.use(cors());

app.get('/contact', (req, res) => {
  res.render('../contactForm/view/contactPage.ejs');
});

app.get('/', (req, res) => {
  res.render('../home/view/home.ejs');
})
app.use("/user", user_details);

app.get('/about', (req, res) => {
  res.render('../Aboutus/view/about.ejs');
});
app.get('/seo', (req, res) => {
  res.render('../services/seo/view/seo.ejs');
});
app.get('/webdev', (req, res) => {
  res.render('../services/webdesign/view/webdesign.ejs');
});
app.get('/social-media-marketing-in-kolkata', (req, res) => {
  res.render('../services/marketing/view/smm.ejs');
});
app.get('/ecommerece', (req, res) => {
  res.render('../services/ecommerce/view/ecom.ejs');
});

app.listen(port, () => {
  console.log("App is running at port " + port);
});