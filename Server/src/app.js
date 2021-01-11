const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes} = require("crypto");



const app = express();




app.get("", (req,res)=>{
    res.send("hello expresssss!");
});

//routing








//listenning
app.listen(3000, ()=>{
    console.log("Server is up on port 3000.");
});





