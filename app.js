const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();

app.use("/", router);

app.use(express.static('public'))

router.get('/', function (req, res){
    res.sendFile(path.join(__dirname, "/public/login.html"))
})

app.listen(3000)
console.log('http://localhost:3000/');