const express = require("express"); // import express 

const app = express(); // calling the express function. 

// handling the requests

app.get("/hai", (req, res, next) => {
    console.log("hai");
    //res.send("data saved successfully...");
    next()
});

app.get("/hai", (req, res, next) => {
    console.log("abc");
    res.send("second route handler...!");
})


app.listen(3000, () => {
    console.log("server started, listening on port no 3000...");
}) // listen some port to connect.