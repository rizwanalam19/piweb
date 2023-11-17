const mongoose = require('mongoose');
const db = "mongodb+srv://rizwanalamcoc:SIsj72u93JPEN1Ii@cluster0.wyvfepw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopoLogy: true,
}).then(() =>{
    console.log("DB Connection successful");
}).catch((e) =>{
    console.log(e);
});