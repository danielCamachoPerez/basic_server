const mongoose = require("mongoose");

URI = "mongodb://localhost:27017/tuto";

mongoose
    .connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("connect to DB!!"))
    .catch((error) => console.log(error));

module.exports = mongoose;