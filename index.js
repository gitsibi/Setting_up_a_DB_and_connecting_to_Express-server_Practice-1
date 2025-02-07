const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const app = express();
const port = 3010;
require('dotenv').config();
app.use(express.static('static'));

const dbUrl=process.env.db_url;
mongoose.connect(dbUrl)
.then((data)=>{
  console.log(`Connected to the mongo Atlas ${data.connection.host}`); 
})
.catch((err)=>{
  console.log("Connection Failed.",err) 
  process.exit(1); 
})

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
