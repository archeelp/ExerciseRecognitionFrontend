const express = require("express"),
    app = express();

app.use(express.static(__dirname + "/public"));

app.listen(process.env.port || 3000,() => {
    console.log("server is running");
})
