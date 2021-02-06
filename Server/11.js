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



app.post('/email', async function (req, res) {
    var email = req.body
    var em = email['email']
    console.log(email)
    const client = await MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology:true})
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    try {
        const db = client.db("tech-demo");
        let collection = db.collection('notes');
        let resp = await collection.find({email:em}).toArray();
        console.log('result of the query is ')
        console.log(resp);

        if(Array.isArray(resp) && resp.length === 0){
            let ins =  await collection.insertOne(email)
            console.log(`insterd one data ${ins}`)
            return res.send(ins)
        }
        else {
            return res.send(resp)
        }

        } catch (err) {
            console.log(err);

        } finally {
            client.close();
        }

    //return res.end('done')
    //return res.render("view","locals") //view-> name if hte file we ar erendersing  , locals -> data passsed in the file
})


app.post('/add',  function (req, res){
    const data = req.body
    console.log('notes received from browser is ')
    console.log('data')


})
