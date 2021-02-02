const express = require('express')
const app = express();
const path = require('path')
const bodyParser = require("body-parser");
const cors = require('cors')
const port = 3000
app.use(cors())

app.listen(port, () => {
    console.log('Server listening on ' + port)
})
app.use(bodyParser.urlencoded({extended: false})) //can be true
app.use(bodyParser.json())


app.post('/num', function (req, res) {
    var num = req.body.value
    console.log(num)
    return res.end('done')
})


const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const dbo = MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var d = db.db("userdata")
    //console.log("Database created!");

});




