require('dotenv').config()
const express = require("express");
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT

app.use("/", router);

app.use(express.static('public'))

router.get('/', function (req, res) {
    res.redirect('/login');
});

router.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/login.html"))
})


app.listen(port)
console.log(`http://localhost:${port}/`);