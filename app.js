const express = require('express')
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
app.use( bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const obj = {
    "email": "def@gmail.com",
    "note": ["pending task1", "complete task2"]
}


const dbo = MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var d = db.db("userdata")
    //console.log("Database created!");

    //  d.collection('Usernotes').findOne({},function (err,res){
    //     if(err) throw err
    //     console.log(res)
    // })
    // d.collection('Usernotes').insertOne(obj,function (err,res){
    //     if(err) throw err
    //     console.log("added data to collection")
    //     db.close()
    // })
});

app.post('http://localhost:3000/eml', (req,res)=>{
    const data = req.body
    console.log(data)


    //code for is data is prensent in db or not and take action accordingly and get the notes and return

    res.send(note)
});



app.listen(3000, () => {
    console.log('Server listening on 3000')
})