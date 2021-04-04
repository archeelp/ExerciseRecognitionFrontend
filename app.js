const express = require("express"),
    cors = require("cors"),
    app = express();

app.use(cors({origin:['http://localhost:3000']}));
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views');

app.get('/',function(req,res) {
    res.sendFile('views/index.html', {root: __dirname })
});

app.listen(process.env.PORT || 3000,() => {
    console.log("server is running");
})
