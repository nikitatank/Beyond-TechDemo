var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";
var assert = require('assert')
const db = 'userdata';
const client = new MongoClient(url, {useUnifiedTopology: true});

client.connect(function (err){
assert.equal(null,err)
    const database = client.db(db)
    console.log("Database name is " + database.databaseName)
    client.close()
});


function onButtonClick(){
        var x = document.getElementById("textInput").value;
        document.getElementById("note").innerHTML = x;

}

function pullDatafromDb()
{

}