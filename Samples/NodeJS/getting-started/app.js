const express = require("express");

const app = express();

app.get("/api/contact", function(req, res) {
    res.json([
        {id:1, name: "Ori"},
    ]);
});

app.listen(8080, function() {
    console.log("Server is running");
});