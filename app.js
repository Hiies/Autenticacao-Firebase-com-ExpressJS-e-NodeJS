const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();

app.use("/", router);
app.use(express.static('public'))



app.listen(3000)
console.log('http://localhost:3000/');