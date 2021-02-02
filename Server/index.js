const express = require('express');
const CORS = require('cors');
const app = express();
const PORT = 3000;
app.use(CORS());

app.post('/email', (req, res) => {
  console.log(res.body);
    res.send(['a note', 'another note']);
});



app.listen(PORT, () => {
  console.log(`Example API listening at http://localhost:${PORT}`);
});