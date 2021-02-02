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


const MongoClient = require('mongodb').MongoClient;
//const url = "mongodb://localhost:27017/userdata";
const url ="mongodb+srv://wgubeyond:Samp2020!@cluster0.xdjyg.mongodb.net/tech-demo?retryWrites=true&w=majority"



app.post('/email', function (req, res) {
    var email = req.body
    console.log(email)
    const data = MongoClient.connect(url, {useUnifiedTopology:true},(err, client) =>{
        if (err) return console.error(err)
        //return  db.db("userdata")
        console.log("connected to database");
        const db = client.db('tech-demo')
        const notes = db.collection('notes')
        notes.insertOne(email)

    });
   // return res.end('done')
    //return res.render("view","locals") //view-> name if hte file we ar erendersing  , locals -> data passsed in the file
})




