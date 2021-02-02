const express = require('express')
const app = express();
const path = require('path');
const port = 3010

app.use('/static',express.static(path.join(__dirname,'static')))


app.get('/',function (req, res){
    res.sendFile(path.join(__dirname,'index.html'))
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`) //string interpolation
})