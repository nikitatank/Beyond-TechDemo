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

        }
    finally {
            client.close();
        }

    //return res.end('done')
    //return res.render("view","locals") //view-> name if hte file we ar erendersing  , locals -> data passsed in the file
})


app.post('/addnote',  async function (req, res){
    const data = JSON.parse(JSON.stringify(req.body))
    console.log('notes received from browser is ')

    let em = data['email']
    let nt = data['note']

    const client = await MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology:true})
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    try {
        const db = client.db("tech-demo");
        let collection = db.collection('notes');
        await collection.updateOne({email:em},{$push:{'note':nt}});
        let d = await collection.find({email:em}).toArray()
        console.log('result of the query is ')
        console.log(d);
        return res.send(d)

    } catch (err) {
        console.log(err);
    }
})


app.post('/deletenote',async function (req,res){
    console.log("data received after clicking on x")
    const data = JSON.parse(JSON.stringify(req.body))
    //console.log(req.body)
    console.log(data['note'])
    const nt = data['note']


    const client = await MongoClient.connect(url, { useNewUrlParser: true,useUnifiedTopology:true})
        .catch(err => { console.log(err); });
    if (!client) {
        return;
    }
    try {
        const db = client.db("tech-demo");
        let collection = db.collection('notes');
        //let d = await collection.find({email:em}).toArray()
        await collection.updateOne({email:data['email']}, {$pull : {'note' : nt }});
        let d = await collection.find({email:data['email']}).toArray()
        console.log('result of the query is ')
        console.log(d);
        return res.send(d)



    } catch (err) {
        console.log(err);

    }


})