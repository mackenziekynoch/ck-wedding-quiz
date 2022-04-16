const path = require('path');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('client/public'));

app.get('*', (req,res) =>{
  res.sendFile(path.resolve('client/public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});