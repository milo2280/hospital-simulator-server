var express = require("express");
var app = express();

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send("Hello world")
});

app.get("/user/:id", (req, res) => {
    var data = {
        "id": req.params["id"],
        "username": "longvm2280",
    }

    res.json(data);
})

app.listen(3000, () => {
    console.log("Server has started ...")
    console.log("Listening on port 3000 ...")
})