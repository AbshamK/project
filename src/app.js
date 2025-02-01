const express = require("express"); // import express 

const app = express(); // calling the express function. 

// handling the requests
app.use("/", (req, res) => {
    res.send("hello, from the server!.."); // sending respond.
})

app.listen(3000, ()=> {
    console.log("server started, listening on port no 3000...");
}) // listen some port to connect.