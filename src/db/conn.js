const mongoose = require("mongoose");

// creating a database 

let  DB = "mongodb+srv://test:test123@cluster0.wt5ms.mongodb.net/mernstack?retryWrites=true&w=majority";
mongoose.connect(DB, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("connection is okay")
}).catch((error) => {
    console.log(`connection is error`)
})