const express = require("express"); // import express 

const app = express(); // calling the express function. 

// handling the requests

app.post("/hai", (req, res) => {
    res.send("data saved successfully...");
});

app.get("/hai/:userid/:place", (req, res) => {
    console.log(req.params);
    res.send({ firstName : "absham", lastName : "abshu"});
});

app.listen(3000, ()=> {
    console.log("server started, listening on port no 3000...");
}) // listen some port to connect.