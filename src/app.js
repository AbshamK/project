const express = require("express"); // import express 

const app = express(); // calling the express function. 

// handling the requests

app.post("/hai", (req, res) => {
    res.send("data saved successfully...");
});

app.get("/hai", (req, res) => {
    res.send({ firstName : "absham", lastName : "abshu"});
});

app.put("/hai", (req, res) => {
    res.send("data changed successfully");
});

app.delete("/hai", (req, res) => {
    res.send("all the data deleted successfully...");
});

app.use("/hai", (req, res) => {
    res.send("HAHAHAHAHAHAHAHAAHAHA.....");
});

app.listen(3000, ()=> {
    console.log("server started, listening on port no 3000...");
}) // listen some port to connect.