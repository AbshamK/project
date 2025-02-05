const express = require("express"); // import express 

const app = express(); // calling the express function. 

const { adminAuth } = require("./middlewares/admin.js");

app.get("/admin/auth", adminAuth, (req, res) => {
    res.send("authendicate successfully...");
})

app.listen(3000, () => {
    console.log("server started, listening on port no 3000...");
}) // listen some port to connect.