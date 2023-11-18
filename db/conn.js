require("dotenv").config();
const mongoose = require('mongoose');
const db = process.env.MONGO_URL;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopoLogy: true,
}).then(() =>{
    console.log("DB Connection successful");
}).catch((e) =>{
    console.log(e);
});