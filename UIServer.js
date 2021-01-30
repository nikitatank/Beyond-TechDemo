const express = require('express')
const app = express();
const port = 3010


app.get('/',function (req, res){
    res.sendFile(path.join(__dirname,'./index.html'))
})

app.get('/js', function (req,res){
    res.sendFile(path.join(__dirname,'./index.js'))
})
app.get('/style.css', function (req,res){
    res.sendFile(path.join(__dirname,'./style.css'))
})


app.listen(port, () => {
    console.log(`Server listening on ${port}`) //string interpolation
})