const express = require('express');
//assigning 'express' to the variable 'express'

const app = express();
const port = 4000;

const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");

app.use(express.static('public'));

app.use('/', indexRoute);
app.use('/about', aboutRoute);
//letting set up router at the root level of our server 

// app.get('/', (req, res) => {
//     res.send("Hello World");

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });

